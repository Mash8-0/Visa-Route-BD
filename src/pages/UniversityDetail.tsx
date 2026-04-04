import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Globe,
  GraduationCap,
  Building,
  Star,
  Clock,
  BookOpen,
  Users,
  X,
  Gift,
  Sparkles,
  Loader2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programDetailsMap, resolveProgramDetailsKey } from "@/data/programDetails";
import { useUniversity, Program } from "@/hooks/useUniversities";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UniversityLogo from "@/components/UniversityLogo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ✅ Group programs by level
const groupProgramsByLevel = (programs: Program[]) => {
  const levels = ["Certificate", "Foundation", "Diploma", "Bachelor", "Master", "PhD"] as const;
  const grouped: Record<string, Program[]> = {};

  levels.forEach((level) => {
    const filtered = programs.filter((p) => p.level === level);
    if (filtered.length > 0) grouped[level] = filtered;
  });

  return grouped;
};

// ✅ Level gradient color
const getLevelColor = (level: string) => {
  switch (level) {
    case "Foundation":
      return "from-amber-500 to-orange-500";
    case "Diploma":
      return "from-emerald-500 to-green-500";
    case "Bachelor":
      return "from-blue-500 to-indigo-500";
    case "Master":
      return "from-purple-500 to-violet-500";
    case "PhD":
      return "from-rose-500 to-pink-500";
    default:
      return "from-gray-500 to-slate-500";
  }
};

// ✅ Badge colors per level
const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case "Foundation":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    case "Diploma":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "Bachelor":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    case "Master":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
    case "PhD":
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
  }
};

// ✅ Slugify Program Name to match programDetailsMap keys
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const UniversityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: university, isLoading, error } = useUniversity(id);
  const [showPromo, setShowPromo] = useState(true);

  const promoConfig: Record<string, { icon: typeof Gift; gradient: string; title: string; description: string }> = {
    apu: {
      icon: Sparkles,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      title: "🎓 Up to 40% Scholarship!",
      description: "APU is offering up to 40% scholarship on tuition fees for eligible international students. Contact us to check your eligibility!",
    },
    alfa: {
      icon: Gift,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      title: "🎉 RM 2,000 Tuition Fee Waiver!",
      description: "ALFA University College offers RM 2,000 tuition fee waiver for students who apply through Visa Route BD. Don't miss this exclusive offer!",
    },
  };

  const promo = id ? promoConfig[id] : null;

  // ✅ Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading university details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ✅ Error state
  if (error || !university) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              University Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The university you're looking for doesn't exist.
            </p>
            <Link to="/universities" className="inline-block mb-4 sm:mb-6">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 px-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universities
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const groupedPrograms = groupProgramsByLevel(university.programs);
  const programLevels = Object.keys(groupedPrograms);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Promo Banner - Fixed at top */}
      {promo && showPromo && (
        <div className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r ${promo.gradient} text-white shadow-lg`}>
          <div className="container mx-auto px-4 py-3 flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <promo.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="font-bold text-xs sm:text-sm">{promo.title}</p>
              <p className="text-[10px] sm:text-xs text-white/90 line-clamp-1">{promo.description}</p>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className={promo && showPromo ? "pt-[52px] sm:pt-[56px]" : ""}>
        <Navbar />
      </div>

      <main className="flex-grow">

        {/* ✅ Hero Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <Link
              to="/universities"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Universities
            </Link>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <UniversityLogo
                logoUrl={university.logoUrl}
                shortName={university.shortName}
                color={university.color}
                size="xl"
                className="bg-white flex-shrink-0 border"
              />

              <div className="text-gray-900">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-gray-100 text-gray-800 border-0 text-xs sm:text-sm"
                >
                  {university.type} University
                </Badge>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 text-gray-900">
                  {university.name}
                </h1>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-600 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    {university.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    Est. {university.established}
                  </span>

                  {university.ranking && (
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                      {university.ranking}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Body Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* ✅ Left content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* About */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-card">
                  <h2 className="text-xl sm:text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    About
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {university.description}
                  </p>
                </div>

                {/* Programs Offered */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-card">
                  <h2 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Programs Offered
                  </h2>

                  {/* Summary cards */}
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {(["Foundation", "Diploma", "Bachelor", "Master", "PhD"] as const).map(
                      (level) => {
                        const count = university.programs.filter(
                          (p) => p.level === level
                        ).length;

                        if (count === 0) return null;

                        return (
                          <div
                            key={level}
                            className={`relative overflow-hidden rounded-xl p-3 sm:p-4 bg-gradient-to-br ${getLevelColor(
                              level
                            )} text-white text-center group hover:scale-105 transition-transform duration-300`}
                          >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-xl sm:text-2xl font-bold">{count}</div>
                            <div className="text-[10px] sm:text-xs font-medium opacity-90">
                              {level}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  {/* Tabs + Accordion */}
                  {programLevels.length > 0 && (
                    <Tabs defaultValue={programLevels[0]} className="w-full">
                      <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl mb-4 sm:mb-6">
                        {programLevels.map((level) => (
                          <TabsTrigger
                            key={level}
                            value={level}
                            className="flex-1 min-w-[60px] sm:min-w-[80px] data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg text-xs sm:text-sm py-1.5 sm:py-2"
                          >
                            {level}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {Object.entries(groupedPrograms).map(([level, programs]) => (
                        <TabsContent key={level} value={level} className="mt-0">
                          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                            {programs.map((program) => {
                              const key = slugify(program.name);
                              const resolvedKey = resolveProgramDetailsKey(key);
                              // Try university-scoped key first, then generic
                              const scopedKey = university ? `${university.id}--${resolvedKey}` : resolvedKey;
                              const details = programDetailsMap[scopedKey] || programDetailsMap[resolvedKey];

                              return (
                                <AccordionItem
                                  key={program.id}
                                  value={program.id}
                                  className="border border-border/50 rounded-xl overflow-hidden bg-muted/30 hover:bg-muted/60 transition-all"
                                >
                                  <AccordionTrigger className="px-4 sm:px-5 py-4 sm:py-5 hover:no-underline">
                                    <div className="w-full flex items-start justify-between gap-3">
                                      <div className="flex items-start gap-2 sm:gap-3">
                                        <div
                                          className={`p-2 rounded-lg bg-gradient-to-br ${getLevelColor(
                                            level
                                          )} text-white shrink-0`}
                                        >
                                          <BookOpen className="w-4 h-4" />
                                        </div>

                                        <div className="text-left">
                                          <h3 className="font-semibold text-foreground text-sm sm:text-lg">
                                            {program.name}
                                          </h3>
                                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            {program.faculty}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="flex flex-wrap items-center gap-2 justify-end">
                                        <Badge className={`${getLevelBadgeClass(level)} border-0 text-xs`}>
                                          {program.level}
                                        </Badge>
                                        <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                          <Clock className="w-3 h-3" />
                                          {program.duration}
                                        </Badge>
                                      </div>
                                    </div>
                                  </AccordionTrigger>

                                  <AccordionContent className="px-4 sm:px-5 pb-5 sm:pb-6">
                                    <div className="rounded-lg border bg-background p-6">
                                      {/* Program Title + Code */}
                                      <div className="mb-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                          {program.name}
                                        </h3>

                                        {details?.code && (
                                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                            {details.code}
                                          </p>
                                        )}
                                      </div>

                                      {/* Program Overview */}
                                      <div className="mb-8">
                                        <h4 className="font-semibold text-sm mb-2">Programme Overview:</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                          {details?.overview || "No overview added yet."}
                                        </p>
                                      </div>

                                      {/* Info row */}
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                        <div>
                                          <p className="font-semibold text-sm">Study Mode:</p>
                                          <p className="text-sm text-muted-foreground">
                                            {details?.studyMode || "—"}
                                          </p>
                                        </div>

                                        <div>
                                          <p className="font-semibold text-sm">Duration Of Study:</p>
                                          <p className="text-sm text-muted-foreground">
                                            {details?.durationOfStudy || "—"}
                                          </p>
                                        </div>

                                        <div>
                                          <p className="font-semibold text-sm">Intakes:</p>
                                          <div className="text-sm text-muted-foreground">
                                            {details?.intakes?.length
                                              ? details.intakes.map((intake, i) => (
                                                  <p key={i}>{intake}</p>
                                                ))
                                              : <p>—</p>}
                                          </div>
                                        </div>

                                        {/* ✅ Duration removed (no need to show) */}
                                      </div>

                                      {/* Career Opportunities */}
                                      <div className="mb-8">
                                        <p className="font-semibold">Career Opportunities</p>
                                        <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                                          {details?.careers?.length ? (
                                            details.careers.map((c, i) => <li key={i}>{c}</li>)
                                          ) : (
                                            <li className="text-muted-foreground">
                                              No career list added yet.
                                            </li>
                                          )}
                                        </ul>
                                      </div>

                                      {/* Fees Structure Table */}
                                      <div>
                                        <h4 className="font-semibold text-base mb-3">Fees Structure:</h4>

                                        {(() => {
                                          const showYear2 = !!details?.fees?.tuition?.year2;
                                          const showYear3 = !!details?.fees?.tuition?.year3;
                                          const showSem1 = !!details?.fees?.tuition?.semester1;
                                          const showSem2 = !!details?.fees?.tuition?.semester2;
                                          const showSem3 = !!details?.fees?.tuition?.semester3;
                                          const showSem4 = !!details?.fees?.tuition?.semester4;
                                          const showSem5 = !!details?.fees?.tuition?.semester5;
                                          const showSem6 = !!details?.fees?.tuition?.semester6;
                                          const showDL1 = !!details?.fees?.tuition?.degreeLevel1;
                                          const showDL2 = !!details?.fees?.tuition?.degreeLevel2;
                                          const showDL3 = !!details?.fees?.tuition?.degreeLevel3;
                                          const showDL4 = !!details?.fees?.tuition?.degreeLevel4;
                                          const isSemesterBased = showSem1 || showSem2 || showSem3 || showSem4 || showSem5 || showSem6;
                                          const isDegreeLevelBased = showDL1 || showDL2 || showDL3 || showDL4;
                                          const isODL = !!details?.fees?.odlEnrolmentFee;

                                          const fmtRM = (v: number | undefined) =>
                                            v ? `RM ${v.toLocaleString()}` : null;

                                          const emgs = details?.fees?.emgs || fmtRM(program.emgsFee) || "—";
                                          const registration = details?.fees?.registrationInternational || fmtRM(program.registrationFee) || "—";
                                          const additional = details?.fees?.additionalFees || "—";
                                          const year1 = details?.fees?.tuition?.year1 || fmtRM(program.tuitionFee) || "—";
                                          const total = details?.fees?.total || fmtRM(program.totalFees) || "—";
                                          const postArrival = details?.fees?.postArrivalFee || "RM 2,000";
                                          const libraryDeposit = details?.fees?.libraryDeposit || "RM 500";
                                          const personalBond = details?.fees?.personalBond || "RM 1,000";

                                          return (
                                            <div className="overflow-x-auto border rounded-sm">
                                              <table className="w-full text-sm">
                                                <thead>
                                                  <tr className="border-b bg-muted/30">
                                                    <th className="p-3 text-left font-semibold">Fee Type</th>
                                                    <th className="p-3 text-left font-semibold">Amount</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {isODL ? (
                                                    <>
                                                      <tr className="border-t">
                                                        <td className="p-3 font-medium">ODL Enrolment Fee</td>
                                                        <td className="p-3">{details?.fees?.odlEnrolmentFee}</td>
                                                      </tr>
                                                      {details?.fees?.fullPayment && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Full Payment</td>
                                                          <td className="p-3">{details.fees.fullPayment}</td>
                                                        </tr>
                                                      )}
                                                      {details?.fees?.yearlyPayments && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Yearly Payments</td>
                                                          <td className="p-3">{details.fees.yearlyPayments}</td>
                                                        </tr>
                                                      )}
                                                      {details?.fees?.firstInstallment && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">1st Installment</td>
                                                          <td className="p-3">{details.fees.firstInstallment}</td>
                                                        </tr>
                                                      )}
                                                      {details?.fees?.installmentPayments && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Subsequent Installments</td>
                                                          <td className="p-3">{details.fees.installmentPayments}</td>
                                                        </tr>
                                                      )}
                                                    </>
                                                  ) : (
                                                    <>
                                                      <tr className="border-t">
                                                        <td className="p-3 font-medium">EMGS</td>
                                                        <td className="p-3">{emgs}</td>
                                                      </tr>
                                                      <tr className="border-t">
                                                        <td className="p-3 font-medium">Registration & Administrative Fee</td>
                                                        <td className="p-3">{registration}</td>
                                                      </tr>
                                                      {additional !== "—" && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Additional Fees</td>
                                                          <td className="p-3">{additional}</td>
                                                        </tr>
                                                      )}
                                                      {details?.fees?.postArrivalFee && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Post-Arrival Processing Fee</td>
                                                          <td className="p-3">{details.fees.postArrivalFee}</td>
                                                        </tr>
                                                      )}
                                                    </>
                                                  )}

                                                  {!isODL && (
                                                    <>
                                                  {isDegreeLevelBased ? (
                                                    <>
                                                      {showDL1 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Degree Level 1</td>
                                                          <td className="p-3">{details?.fees?.tuition?.degreeLevel1}</td>
                                                        </tr>
                                                      )}
                                                      {showDL2 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Degree Level 2</td>
                                                          <td className="p-3">{details?.fees?.tuition?.degreeLevel2}</td>
                                                        </tr>
                                                      )}
                                                      {showDL3 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Degree Level 3</td>
                                                          <td className="p-3">{details?.fees?.tuition?.degreeLevel3}</td>
                                                        </tr>
                                                      )}
                                                      {showDL4 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Degree Level 4</td>
                                                          <td className="p-3">{details?.fees?.tuition?.degreeLevel4}</td>
                                                        </tr>
                                                      )}
                                                    </>
                                                  ) : isSemesterBased ? (
                                                    <>
                                                      {showSem1 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 1</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester1}</td>
                                                        </tr>
                                                      )}
                                                      {showSem2 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 2</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester2}</td>
                                                        </tr>
                                                      )}
                                                      {showSem3 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 3</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester3}</td>
                                                        </tr>
                                                      )}
                                                      {showSem4 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 4</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester4}</td>
                                                        </tr>
                                                      )}
                                                      {showSem5 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 5</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester5}</td>
                                                        </tr>
                                                      )}
                                                      {showSem6 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Semester 6</td>
                                                          <td className="p-3">{details?.fees?.tuition?.semester6}</td>
                                                        </tr>
                                                      )}
                                                    </>
                                                  ) : (
                                                    <>
                                                      <tr className="border-t">
                                                        <td className="p-3 font-medium">Tuition Fees (Year 1)</td>
                                                        <td className="p-3">{year1}</td>
                                                      </tr>
                                                      {showYear2 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Tuition Fees (Year 2)</td>
                                                          <td className="p-3">{details?.fees?.tuition?.year2}</td>
                                                        </tr>
                                                      )}
                                                      {showYear3 && (
                                                        <tr className="border-t">
                                                          <td className="p-3 font-medium">Tuition Fees (Year 3)</td>
                                                          <td className="p-3">{details?.fees?.tuition?.year3}</td>
                                                        </tr>
                                                      )}
                                                    </>
                                                  )}

                                                  {details?.fees?.libraryDeposit && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Library Deposit <span className="text-xs text-muted-foreground">(Refundable)</span></td>
                                                      <td className="p-3">{details.fees.libraryDeposit} <span className="text-xs text-muted-foreground">(Based on course)</span></td>
                                                    </tr>
                                                  )}
                                                  {details?.fees?.engineeringLabDeposit && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Engineering Laboratory Deposit <span className="text-xs text-muted-foreground">(Refundable)</span></td>
                                                      <td className="p-3">{details.fees.engineeringLabDeposit}</td>
                                                    </tr>
                                                  )}
                                                  {details?.fees?.hospitalityResourceFees && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Hospitality Resource Fees</td>
                                                      <td className="p-3">{details.fees.hospitalityResourceFees}</td>
                                                    </tr>
                                                  )}
                                                  {details?.fees?.eventsResourceFees && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Events Resource Fees</td>
                                                      <td className="p-3">{details.fees.eventsResourceFees}</td>
                                                    </tr>
                                                  )}
                                                  {details?.fees?.personalBond && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Personal Bond <span className="text-xs text-muted-foreground">(Refundable)</span></td>
                                                      <td className="p-3">{details.fees.personalBond} <span className="text-xs text-muted-foreground">(Based on course)</span></td>
                                                    </tr>
                                                  )}

                                                  {details?.fees?.fullPayment && (
                                                    <tr className="border-t">
                                                      <td className="p-3 font-medium">Full Payment</td>
                                                      <td className="p-3">{details.fees.fullPayment}</td>
                                                    </tr>
                                                  )}
                                                    </>
                                                  )}

                                                  <tr className="border-t bg-muted/30">
                                                    <td className="p-3 font-semibold">Total Fees</td>
                                                    <td className="p-3 font-semibold">{total}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              );
                            })}
                          </Accordion>
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}

                  {/* Total Count */}
                  <div className="mt-4 sm:mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                    <span>Total Programs Available</span>
                    <Badge variant="secondary" className="text-sm sm:text-base">
                      {university.programs.length} Programs
                    </Badge>
                  </div>
                </div>
              </div>

              {/* ✅ Right Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Actions */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-card">
                  <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href={university.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button variant="outline" className="w-full justify-start text-sm">
                        <Globe className="mr-2 h-4 w-4" />
                        Visit Website
                      </Button>
                    </a>

                    <Link to="/contact" className="block">
                      <Button className="w-full text-sm">Apply Now</Button>
                    </Link>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-card">
                  <h3 className="font-semibold mb-4 text-sm sm:text-base">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {university.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 text-xs sm:text-sm"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-card">
                  <h3 className="font-semibold mb-4 text-sm sm:text-base">Facilities</h3>
                  <ul className="space-y-2">
                    {university.facilities.map((facility, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* ✅ End Sidebar */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityDetail;
