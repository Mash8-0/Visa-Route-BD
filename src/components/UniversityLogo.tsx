import React, { useState } from "react";

interface UniversityLogoProps {
  logoUrl?: string | null;
  shortName: string;
  color: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "box" | "circle";
}

const sizeClasses = {
  sm: "w-12 h-12 text-xs",
  md: "w-16 h-16 sm:w-20 sm:h-20 text-sm sm:text-lg",
  lg: "w-20 h-20 md:w-24 md:h-24 text-xl sm:text-2xl md:text-3xl",
  xl: "w-24 h-24 md:w-32 md:h-32 text-2xl md:text-4xl",
};

const UniversityLogo = ({
  logoUrl,
  shortName,
  color,
  size = "md",
  className = "",
  variant = "box",
}: UniversityLogoProps) => {
  const [imgError, setImgError] = useState(false);

  const radius = variant === "circle" ? "rounded-full" : "rounded-2xl";

  const baseClasses = `${radius} flex items-center justify-center shadow-md ${sizeClasses[size]} ${className}`;

  if (logoUrl && !imgError) {
    return (
      <div className={`${baseClasses} bg-white border border-gray-200 overflow-hidden p-2`}>
        <img
          src={logoUrl}
          alt={`${shortName} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`${baseClasses} bg-gradient-to-br ${color}`}>
      <span className="text-white font-bold drop-shadow-md">{shortName}</span>
    </div>
  );
};

export default UniversityLogo;
