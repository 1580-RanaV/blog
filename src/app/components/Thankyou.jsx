"use client";

import React from "react";

const Thankyou = () => {
  return (
    <footer className="w-full py-10 sm:py-12">
        
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="text-center mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          You’ve reached the end — thank you !
        </p>
        <p className="mt-6 text-sm sm:text-base text-neutral-800 dark:text-neutral-400 font-mono">
          © {new Date().getFullYear()} All rights reserved.{" "}
          <span className="font-medium">vrana.fun</span> · www.vrana.fun
        </p>
      </div>
    </footer>
  );
};

export default Thankyou;
