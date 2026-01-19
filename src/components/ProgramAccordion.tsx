import { useState } from "react";
import { ChevronDown, Clock, Briefcase, DollarSign, BookOpen, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProgramDetails {
  id: string;
  name: string;
  duration: string;
  level: "Foundation" | "Diploma" | "Bachelor" | "Master" | "PhD";
  faculty: string;
  studyMode?: string;
  intakes?: string[];
  careerOpportunities?: string[];
  emgsFee?: number;
  registrationFee?: number;
  tuitionFee?: number;
  totalFees?: number;
}

interface ProgramAccordionProps {
  program: ProgramDetails;
  levelColor: string;
  levelBadgeClass: string;
}

const formatCurrency = (amount: number | undefined) => {
  if (!amount) return "—";
  return `RM ${amount.toLocaleString()}`;
};

const ProgramAccordion = ({ program, levelColor, levelBadgeClass }: ProgramAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Decorative gradient line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${levelColor}`} />

      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-5 pl-5 sm:pl-6 flex items-start justify-between gap-3 hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${levelColor} text-white shrink-0`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-2">
              {program.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <Users className="w-3 h-3 shrink-0" />
              <span className="truncate">{program.faculty}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Badge className={`${levelBadgeClass} border-0 text-xs hidden sm:inline-flex`}>
            {program.level}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1 text-xs">
            <Clock className="w-3 h-3" />
            {program.duration}
          </Badge>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
          />
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-5 sm:pl-6 border-t border-gray-100">
          {/* Study Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-gray-100">
            <div>
              <p className="text-xs text-muted-foreground font-medium">Study Mode:</p>
              <p className="text-sm font-medium mt-1">{program.studyMode || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Duration Of Study:</p>
              <p className="text-sm font-medium mt-1">{program.duration || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Intakes:</p>
              <p className="text-sm font-medium mt-1">
                {program.intakes && program.intakes.length > 0 
                  ? program.intakes.join(", ") 
                  : "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Duration:</p>
              <p className="text-sm font-medium mt-1">{program.duration}</p>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="py-4 border-b border-gray-100">
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-primary" />
              Career Opportunities
            </h4>
            {program.careerOpportunities && program.careerOpportunities.length > 0 ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {program.careerOpportunities.map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">• No career list added yet.</p>
            )}
          </div>

          {/* Fees Structure */}
          <div className="pt-4">
            <h4 className="text-sm font-semibold flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-primary" />
              Fees Structure:
            </h4>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-2 p-3 text-xs sm:text-sm">
                <div className="font-medium text-muted-foreground">EMGS</div>
                <div className="font-medium text-muted-foreground">Registration Fee / International Student Fee</div>
                <div className="font-medium text-muted-foreground">Tuition Fees (1st year)</div>
                <div className="font-medium text-muted-foreground">Total Fees</div>
              </div>
              <div className="grid grid-cols-4 gap-2 p-3 bg-white border-t border-gray-100">
                <div className="text-sm font-medium text-amber-600">{formatCurrency(program.emgsFee)}</div>
                <div className="text-sm font-medium text-amber-600">{formatCurrency(program.registrationFee)}</div>
                <div className="text-sm font-medium text-blue-600">{formatCurrency(program.tuitionFee)}</div>
                <div className="text-sm font-semibold text-rose-600">{formatCurrency(program.totalFees)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramAccordion;
