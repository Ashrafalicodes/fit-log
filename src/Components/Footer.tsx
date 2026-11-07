import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0C0D10] border-t border-gray-800">
      <div className="container mx-auto px-3 md:px-4 h-[52px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <Image
            src="/Footerlogo.png"
            alt="FITLOG"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-white font-bold text-[9px] tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-[8px] sm:text-[10px] text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;