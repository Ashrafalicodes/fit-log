"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import { useWorkoutContext } from "@/context/WorkoutContext";

const Myplan = () => {
  const { workouts, setWorkouts, myPlan, setMyPlan } = useWorkoutContext();
  const [activeTab, setActiveTab] = useState<"Today's Plan" | "Saved">(
    "Today's Plan",
  );

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const [orderdId, setOrderdId] = useState<number[]>([]);
  const currentWorkout = activeTab === "Today's Plan" ? myPlan : workouts;
  const sortedWorkouts = [...currentWorkout].sort((a, b) => {
    if (sortBy === "Duration") return a.duration - b.duration;
    if (sortBy === "Calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "Rating") return b.rating - a.rating;
    return 0;
  });
  const totalExrcise = currentWorkout.length;
  const totalMinutes = currentWorkout.reduce(
    (sum, item) => sum + item.duration,
    0,
  );
  const totalCalories = currentWorkout.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "Today's Plan") {
      setMyPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setWorkouts((prev) => prev.filter((item) => item.id !== id));
    }
    toast("Remove");
  };
  // Mark as Done
  const handleMarkAsDone = (id: number) => {
    setMyPlan((prev) => prev.filter((item) => item.id !== id));

    toast.success("Workout completed!");
  };

  const renderWorkout = () => {
    if (sortedWorkouts.length === 0) {
      return (
       <div className="min-h-[280px] md:min-h-[350px] border border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center text-center px-4">

      <h2 className="text-white text-sm font-black uppercase tracking-wide">
        NOTHING HERE YET
      </h2>

      <p className="text-gray-400 text-[11px] mt-2">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/workout"
        className="bg-lime-400 hover:bg-lime-500 text-black text-[10px] font-bold px-5 py-2 rounded-full mt-4 transition"
      >
        Go to workouts
      </Link>

    </div>
      );
    }
    return (
      <div>
        {sortedWorkouts.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between gap-3 bg-[#15181F] border border-gray-800 rounded-xl p-3">
              {/* Left Content */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Image */}
                <div className="w-[72px] h-[48px] shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Workout Details */}
                <div className="min-w-0">
                  <h3 className="text-white text-[11px] font-extrabold uppercase truncate">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-[9px] mt-0.5">
                    {item.difficulty}
                  </p>

                  {/* Workout Stats */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lime-400 text-[9px]">
                      ◷ {item.duration} min
                    </span>

                    <span className="text-lime-400 text-[9px]">
                      ♨ {item.caloriesBurned} kcal
                    </span>

                    <span className="text-lime-400 text-[9px]">
                      ★ {item.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href={`/workout/${item.id}`}
                  className="border border-gray-700 text-gray-300 text-[9px] px-3 py-1.5 rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </Link>

                {activeTab === "Today's Plan" && (
                  <button className="bg-lime-400 text-black text-[9px] font-bold px-3 py-1.5 rounded-lg" onClick={()=>handleMarkAsDone(item.id)}>
                    ✓ Mark as Done
                  </button>
                )}

                <button
                  className="text-gray-500 hover:text-red-400 text-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="container mx-auto px-4 py-8 bg-[#13161D]">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Build</h1>

          <p className="text-sm text-gray-400 mt-2">
            Track your workouts, monitor your progress and manage your fitness
            journey.
          </p>
        </div>

        {/* Statistics */}
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-[#13161D] text-white border border-gray-800">
          {/* Exercises */}
          <div className="stat">
            <div className="stat-title text-gray-400">Exercises</div>

            <div className="stat-value text-white">{totalExrcise}</div>

            <div className="stat-desc text-gray-500">
              Total exercises completed
            </div>

            <div className="stat-figure text-secondary text-3xl">♧</div>
          </div>

          {/* Minutes */}
          <div className="stat">
            <div className="stat-title text-gray-400">Minutes</div>

            <div className="stat-value text-white">{totalMinutes}</div>

            <div className="stat-desc text-gray-500">Total workout time</div>

            <div className="stat-figure text-secondary text-3xl">◷</div>
          </div>

          {/* Calories */}
          <div className="stat">
            <div className="stat-title text-gray-400">Calories</div>

            <div className="stat-value text-white">{totalCalories}</div>

            <div className="stat-desc text-gray-500">Calories burned</div>

            <div className="stat-figure text-secondary text-3xl">♨</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Today's Plan"
              checked={activeTab === "Today's Plan"}
              onChange={() => setActiveTab("Today's Plan")}
            />

            <div className="tab-content bg-[#13161D] border border-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-2">Today&apos;s Plan</h2>

              <p className="text-sm text-gray-400">
                Your planned workouts will appear here.
              </p>
              {renderWorkout()}
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Saved"
              onChange={() => setActiveTab("Saved")}
            />

            <div className="tab-content bg-[#13161D] border border-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-2">Saved Workouts</h2>

              <p className="text-sm text-gray-400">
                Your saved workouts will appear here.
              </p>
              {renderWorkout()}
            </div>
            <select
              onChange={(e) =>
                setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
              }
              className="select ms-auto"
            >
              <option disabled={true}>Pick a category</option>
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Myplan;
