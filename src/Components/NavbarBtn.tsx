'use client'
import { useWorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React from 'react';

const NavbarBtn = () => {
    const {workouts,myPlan}=useWorkoutContext();
    return (
         <div className="flex items-center justify-end gap-4 sm:gap-5">
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <Link href="/My-plan" className="btn">
                Plan
              </Link>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                {myPlan.length}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <Link href="/My-plan" className="btn">
                Saved
              </Link>
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#303138] text-[9px] text-gray-400">
                {workouts.length}
              </span>
            </div>
          </div>
    );
};

export default NavbarBtn;