import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

/**
 * Put logo files inside: /public/universities/
 * Then use: "/universities/<filename>"
 */
const logoMap: Record<string, string> = {
  AUC: "/universities/ALFA-Logo-WBG.webp",
  INTI: "/universities/INTI.png",
  LUC: "/universities/lincoln.webp",
  MMU: "/universities/MMU.png",

  LSBF: "/universities/lsbf.png",
  SUNWAY: "/universities/sunway-university.png",
  SEGI: "/universities/segi.png",
  TAYLORS: "/universities/taylors.png",
  MONASH: "/universities/monash-university.png",

  UCSI: "/universities/UCSI.png",
  UNIKL: "/universities/unikl-logo-web.png",
  APU: "/universities/APU.png",
  IMU: "/universities/imu.png",
  MAHSA: "/universities/mahsa-university.png",
  UNITEN: "/universities/uniten.png",
  UTM: "/universities/utm.png",
  UNIRAZAK: "/universities/unirazak.png",
  CITY: "/universities/City-uni.png",

  GUC: "/universities/guc.png",
  IIMAT: "/universities/iimat.png",
  HELP: "/universities/hu.png",
  CIC: "/universities/cybernetics.png",

  IIUM: "/universities/iium.jpg",
  DRBHICOM: "/universities/drb-hicom.png",
  DHU: "/universities/drb-hicom.png",
};

const nameLogoMap: Record<string, string> = {
  CYBERNETICSINTERNATIONALCOLLEGE: "/universities/cybernetics.png",
  CYBERJAYAUNIVERSITYCOLLEGE: "/universities/cyberjaya-university.png",
  CYBERJAYAUNIVERSITY: "/universities/cyberjaya-university.png",

  IIMATCOLLEGE: "/universities/iimat.png",
  IIMAT: "/universities/iimat.png",

  HELPUNIVERSITY: "/universities/hu.png",
  HELPUNIVERSITYCOLLEGE: "/universities/hu.png",

  LSBF: "/universities/lsbf.png",
  SUNWAYUNIVERSITY: "/universities/sunway-university.png",
  SEGIUNIVERSITY: "/universities/segi.png",
  TAYLORSUNIVERSITY: "/universities/taylors.png",

  MONASH: "/universities/monash.png",
  MONASHUNIVERSITY: "/universities/monash.png",
  MONASHUNIVERSITYMALAYSIA: "/universities/monash.png",
  MONASHUNIVERSITYMALAYSIACAMPUS: "/universities/monash.png",

  LIMKOKWING: "/universities/limkokwing.png",
  LIMKOKWINGUNIVERSITY: "/universities/limkokwing.png",
  "LIMKOKWINGUNIVERSITYOFCREATIVE TECHNOLOGY": "/universities/limkokwing.png",
  LIMKOKWINGUNIVERSITYOFCREATIVETECHNOLOGY: "/universities/limkokwing.png",
};

const normalizeKey = (value: unknown) =>
  String(value ?? "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

export interface Program {
  id: string;
  name: string;
  duration: string;
  level: "Foundation" | "Diploma" | "Bachelor" | "Master" | "PhD";
  faculty: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  color: string;
  type: "Public" | "Private";
  description: string;
  established: number;
  ranking?: string;
  website: string;
  logoUrl?: string;
  programs: Program[];
  facilities: string[];
  highlights: string[];
}

const alfaExtraPrograms: Program[] = [
  {
    id: "local-m1",
    name: "Master of Business Administration",
    duration: "1 Year 4 Months",
    level: "Master",
    faculty: "Business",
  },
  {
    id: "local-m2",
    name: "Master of Business Administration (ODL)",
    duration: "1 Year 4 Months",
    level: "Master",
    faculty: "Business",
  },
  {
    id: "local-m3",
    name: "Master of Business Administration (International Business)",
    duration: "1 Year 3 Months",
    level: "Master",
    faculty: "Business",
  },
  {
    id: "local-m4",
    name: "Master of Project Management",
    duration: "1 Year 3 Months",
    level: "Master",
    faculty: "Management",
  },
  {
    id: "local-m5",
    name: "Master in Information Technology",
    duration: "1 Year 3 Months",
    level: "Master",
    faculty: "Information Technology",
  },
  {
    id: "local-m6",
    name: "Master of Education in Early Childhood Education",
    duration: "2 Years",
    level: "Master",
    faculty: "Education",
  },
  {
    id: "local-m7",
    name: "Master of Education in TESL",
    duration: "2 Years",
    level: "Master",
    faculty: "Education",
  },
  {
    id: "local-m8",
    name: "Master of Science in Management",
    duration: "3 Years",
    level: "Master",
    faculty: "Management",
  },
  {
    id: "local-m9",
    name: "Master in Art and Design",
    duration: "3 Years",
    level: "Master",
    faculty: "Art and Design",
  },
  {
    id: "local-m10",
    name: "Master in Education",
    duration: "1 Year 6 Months",
    level: "Master",
    faculty: "Education",
  },
  {
    id: "local-m11",
    name: "Master of Philosophy in Engineering",
    duration: "3 Years",
    level: "Master",
    faculty: "Engineering",
  },
  {
    id: "local-m12",
    name: "Master in Supply Chain Management",
    duration: "1 Year 3 Months",
    level: "Master",
    faculty: "Management",
  },
  {
    id: "local-m13",
    name: "MBA in Oil and Gas Management",
    duration: "1 Year 3 Months",
    level: "Master",
    faculty: "Business",
  },
  {
    id: "local-m14",
    name: "Master of Music",
    duration: "3 Years",
    level: "Master",
    faculty: "Music",
  },
  {
    id: "local-p1",
    name: "Doctor of Philosophy in Management",
    duration: "3 Years",
    level: "PhD",
    faculty: "Management",
  },
  {
    id: "local-p2",
    name: "Doctor of Philosophy in Social Sciences",
    duration: "3 Years",
    level: "PhD",
    faculty: "Social Sciences",
  },
  {
    id: "local-p3",
    name: "Doctor of Philosophy in Information Technology",
    duration: "3 Years",
    level: "PhD",
    faculty: "Information Technology",
  },
  {
    id: "local-p4",
    name: "Doctor of Philosophy in Education",
    duration: "3 Years",
    level: "PhD",
    faculty: "Education",
  },
  {
    id: "local-p5",
    name: "Doctor of Philosophy in Art and Design",
    duration: "3 Years",
    level: "PhD",
    faculty: "Art and Design",
  },
  {
    id: "local-p6",
    name: "Doctor of Philosophy in Performing Art",
    duration: "3 Years",
    level: "PhD",
    faculty: "Performing Art",
  },
  {
    id: "local-p7",
    name: "Doctor of Philosophy in Sport Science",
    duration: "3 Years",
    level: "PhD",
    faculty: "Sport Science",
  },
  {
    id: "local-p8",
    name: "Doctor of Business Administration (DBA)",
    duration: "3 Years",
    level: "PhD",
    faculty: "Business",
  },
];

const mergeProgramsWithoutDuplicates = (
  existingPrograms: Program[],
  extraPrograms: Program[]
): Program[] => {
  const existingNameSet = new Set(
    existingPrograms.map((program) => normalizeKey(program.name))
  );

  const missingExtras = extraPrograms.filter(
    (program) => !existingNameSet.has(normalizeKey(program.name))
  );

  return [...existingPrograms, ...missingExtras];
};

const getExtraProgramsForUniversity = (
  universityName: string,
  shortName: string
): Program[] => {
  const nameKey = normalizeKey(universityName);
  const shortKey = normalizeKey(shortName);

  const isAlfa =
    nameKey === "ALFAUNIVERSITYCOLLEGE" ||
    shortKey === "AUC" ||
    shortKey === "ALFA";

  if (isAlfa) {
    return alfaExtraPrograms;
  }

  return [];
};

export const useUniversities = () => {
  return useQuery({
    queryKey: ["universities"],
    queryFn: async (): Promise<University[]> => {
      const { data: universities, error: uniError } = await supabase
        .from("universities")
        .select("*")
        .order("name");

      if (uniError) throw uniError;

      const { data: programs, error: progError } = await supabase
        .from("programs")
        .select("*");

      if (progError) throw progError;

      const programsByUniversity = (programs || []).reduce((acc, prog) => {
        if (!acc[prog.university_id]) acc[prog.university_id] = [];

        acc[prog.university_id].push({
          id: prog.id,
          name: prog.name,
          duration: prog.duration,
          level: prog.level as Program["level"],
          faculty: prog.faculty,
        });

        return acc;
      }, {} as Record<string, Program[]>);

      return (universities || []).map((uni) => {
        const shortName = (uni.short_name as string) || "";
        const shortKey = normalizeKey(shortName);
        const nameKey = normalizeKey(uni.name);

        const resolvedLogo =
          (uni.logo_url as string | null) ||
          nameLogoMap[nameKey] ||
          logoMap[shortKey] ||
          undefined;

        const dbPrograms = programsByUniversity?.[uni.id] || [];
        const extraPrograms = getExtraProgramsForUniversity(uni.name, shortName);
        const mergedPrograms = mergeProgramsWithoutDuplicates(
          dbPrograms,
          extraPrograms
        );

        return {
          id: uni.id,
          name: uni.name,
          shortName,
          location: uni.location,
          color: uni.color,
          type: uni.type as "Public" | "Private",
          description: uni.description,
          established: uni.established,
          ranking: uni.ranking || undefined,
          website: uni.website,
          logoUrl: resolvedLogo,
          programs: mergedPrograms,
          facilities: uni.facilities || [],
          highlights: uni.highlights || [],
        };
      });
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useUniversity = (id: string | undefined) => {
  return useQuery({
    queryKey: ["university", id],
    queryFn: async (): Promise<University | null> => {
      if (!id) return null;

      const { data: university, error: uniError } = await supabase
        .from("universities")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (uniError) throw uniError;
      if (!university) return null;

      const { data: programs, error: progError } = await supabase
        .from("programs")
        .select("*")
        .eq("university_id", id);

      if (progError) throw progError;

      const shortName = (university.short_name as string) || "";
      const shortKey = normalizeKey(shortName);
      const nameKey = normalizeKey(university.name);

      const resolvedLogo =
        (university.logo_url as string | null) ||
        nameLogoMap[nameKey] ||
        logoMap[shortKey] ||
        undefined;

      const dbPrograms: Program[] = (programs || []).map((prog) => ({
        id: prog.id,
        name: prog.name,
        duration: prog.duration,
        level: prog.level as Program["level"],
        faculty: prog.faculty,
      }));

      const extraPrograms = getExtraProgramsForUniversity(
        university.name,
        shortName
      );

      const mergedPrograms = mergeProgramsWithoutDuplicates(
        dbPrograms,
        extraPrograms
      );

      return {
        id: university.id,
        name: university.name,
        shortName,
        location: university.location,
        color: university.color,
        type: university.type as "Public" | "Private",
        description: university.description,
        established: university.established,
        ranking: university.ranking || undefined,
        website: university.website,
        logoUrl: resolvedLogo,
        programs: mergedPrograms,
        facilities: university.facilities || [],
        highlights: university.highlights || [],
      };
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
