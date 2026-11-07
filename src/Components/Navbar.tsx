import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavbarBtn from "./NavbarBtn";


const links = (
  <>
    <li>
      <Navlinks
        href="/workout"
      >
        Workouts
      </Navlinks>
    </li>

    <li>
      <Navlinks
        href="/My-plan"
        
      >
        My Plan
      </Navlinks>
    </li>
  </>
);

export default function Navbar() {
  return (
    <header className="border-b border-[#202126] bg-[#0b0c0f]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid h-13.5 grid-cols-3 items-center">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            {/* Mobile menu */}
            <div className="dropdown sm:hidden">
              <div
                tabIndex={0}
                role="button"
                aria-label="Open navigation menu"
                className="mr-1 cursor-pointer text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul className="menu dropdown-content z-50 mt-3 w-40 rounded-lg bg-[#15161a] p-2 shadow">
                {links}
              </ul>
            </div>

            <Image
              src="/logo.png"
              alt="FITLOG"
              width={23}
              height={23}
              className="object-contain"
            />

            <Link href='/'>
            <span className="text-xs font-bold tracking-wide text-white">
              FITLOG
            </span></Link>
          </div>

          {/* CENTER: NAVIGATION */}
          <nav className="hidden justify-center sm:flex">
            <ul className="flex items-center gap-1">{links}</ul>
          </nav>

          {/* RIGHT: PLAN AND SAVED */}
         <NavbarBtn/>
        </div>
      </div>
    </header>
  );
}
