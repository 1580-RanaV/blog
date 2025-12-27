"use client";

import { BIO } from "../constants";

export default function Header({ onNameClick, delayMs = 0, variant = "desktop" }) {
  const isDesktop = variant === "desktop";
  const h1Classes = isDesktop 
    ? "text-[0.875rem] font-medium mb-1 leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
    : "text-[0.875rem] font-normal mb-1 leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity";
  const pClasses = isDesktop
    ? "text-[0.875rem] font-medium sub-heading leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
    : "text-[0.875rem] font-normal text-white leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity";

  return (
    <div className="fade-seq" style={{ "--fade-delay": `${delayMs}ms` }}>
      <h1 
        onClick={onNameClick}
        className={h1Classes}
      >
        {BIO.name}
      </h1>
      <p 
        onClick={onNameClick}
        className={pClasses}
      >
        {BIO.title}
      </p>
    </div>
  );
}

