"use client";

import { useWorkoutContext } from "@/context/WorkoutContext";
import { WorkoutType } from "@/types/workoutTypes";
import React from "react";
import { toast } from "react-toastify";

const Addbtn = ({ workout }: { workout: WorkoutType }) => {
  const { workouts, setWorkouts, myPlan, setMyPlan } = useWorkoutContext();

  const alreadyInTodayPlan = myPlan.some((item) => item.id === workout.id);

  const alreadySaved = workouts.some((item) => item.id === workout.id);

  const isPlanFull = myPlan.length >= 5;
  const handleAddToPlan = () => {
    if (alreadyInTodayPlan) {
      toast.error("Already in today's plan!");
      return;
    }

    if (isPlanFull) {
      toast.error("Today's plan is full!");
      return;
    }

    setMyPlan((prev) => [...prev, workout]);

    toast.success("Added to today's plan!");
  };

  const handleSave = () => {
    if (alreadySaved) {
      toast.error("Already saved!");
      return;
    }

    setWorkouts((prev) => [...prev, workout]);
    toast.success("Workout saved!");
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleAddToPlan}
        // disabled={alreadyInTodayPlan || isPlanFull}
        className="bg-lime-400 text-black text-[10px] font-extrabold px-4 py-2.5 rounded-md disabled:opacity-50"
      >
        + Add to today's plan
      </button>

      <button
        type="button"
        onClick={handleSave}
        // disabled={alreadySaved}
        className="border border-gray-700 text-gray-300 text-[10px] font-semibold px-4 py-2.5 rounded-md disabled:opacity-50"
      >
        ♡ Save for later
      </button>
    </div>
  );
};

export default Addbtn;
