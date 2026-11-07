import Link from 'next/link';
import { WorkoutType } from '@/types/workoutTypes';
import Image from 'next/image';
import React from 'react';

const Card = ({ workout }: { workout: WorkoutType }) => {
  return (
  <Link href={`/workout/${workout.id}`}>
    <div className="w-full max-w-full bg-[#15171d] border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 group">

      {/* Workout Image */}
      <div className="relative w-full h-50 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, 260px"
          quality={75}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-3">

        {/* Muscle Groups */}
        <div className="flex items-center gap-2 mb-2">
          {workout.muscleGroups.slice(0, 2).map((muscle, index) => (
            <span
              key={index}
              className="bg-lime-400 text-black text-[9px] font-black uppercase px-2 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-white text-xs font-extrabold uppercase tracking-wide truncate">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="text-gray-500 text-[9px] mt-1 truncate">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-800 my-2.5" />

        {/* Workout Stats */}
        <div className="flex items-center justify-between text-gray-400 text-[9px] gap-2">

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>◷</span>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>●</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-yellow-400">☆</span>
            <span>{workout.rating}</span>
          </div>

        </div>
      </div>
          
    </div>
  </Link>
  );
};

export default Card;
