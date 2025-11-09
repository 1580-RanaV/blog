"use client";

import React from "react";

const BADGE_URL =
  "https://komarev.com/ghpvc/?username=1580-RanaV&label=Profile%20views&color=111111&style=flat-square";

export default function ProfileViewsBadge() {
  return (
    <div className="mb-6">
      <img
        src={BADGE_URL}
        alt="Profile views counter badge"
        width={130}
        height={20}
        loading="lazy"
        className="h-[20px] w-auto"
      />
    </div>
  );
}
