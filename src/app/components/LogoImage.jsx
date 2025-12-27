"use client";

import Image from "next/image";
import { IMAGES } from "../constants";

export default function LogoImage({ delayMs = 0, className = "" }) {
  return (
    <div className={`fade-seq ${className}`} style={{ "--fade-delay": `${delayMs}ms` }}>
      <Image
        src={IMAGES.logo}
        alt="Logo"
        width={50}
        height={50}
        className="w-[50px] h-[50px]"
        priority
      />
    </div>
  );
}

