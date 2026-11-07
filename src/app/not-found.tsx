
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#13161D] flex items-center justify-center px-4 text-white">
      <div className="text-center max-w-lg">

        <h1 className="text-8xl md:text-9xl font-bold text-[#A3E635]">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Sorry! The page you are looking for doesn&apos;t exist
          or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-lg bg-[#A3E635] text-black font-semibold hover:bg-[#bef264] transition duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
