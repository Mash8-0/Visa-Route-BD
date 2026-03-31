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

const getExtraProgramsForUniversity = (
  _universityName: string,
  _shortName: string
): Program[] => {
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
          programs: dbPrograms,
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
        programs: dbPrograms,
        facilities: university.facilities || [],
        highlights: university.highlights || [],
      };
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
