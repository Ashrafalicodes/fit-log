
import Addbtn from '@/Components/workOutDetails/Addbtn';
import { getWorkoutById } from '@/lib/api';
import Image from 'next/image';
import React from 'react';

const daynamicPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  return (
    <section className="bg-[#0F1115] min-h-screen py-6 sm:py-8 md:py-10 px-3 sm:px-5">

      <div className="w-full max-w-7xl bg-[#0f1117] border border-gray-800 rounded-xl p-3 sm:p-4 md:p-5 container mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 lg:gap-8">

          {/* Workout Image */}
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:min-h-162.5 lg:h-full overflow-hidden rounded-lg">

            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover"
            />

          </div>

          {/* Workout Content */}
          <div className="flex flex-col min-w-0 py-1">

            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight wrap-break">
              {workout.name}
            </h1>

            <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-3">
              {workout.muscleGroups.map((muscle:string, index:number) => (
                <span
                  key={index}
                  className="bg-lime-400 text-black text-[10px] sm:text-xs font-black uppercase px-3 py-1.5 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Information */}
            <div className="bg-[#151922] rounded-lg mt-4 divide-y divide-gray-800 px-3 sm:px-4">

              {[
                { label: 'EQUIPMENT', value: workout.equipment },
                { label: 'DIFFICULTY', value: workout.difficulty },
                { label: 'SETS', value: workout.sets },
                { label: 'REPS', value: workout.reps },
                { label: 'DURATION', value: `${workout.duration} min` },
                { label: 'CALORIES', value: `${workout.caloriesBurned} kcal` },
                { label: 'RATING', value: workout.rating },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-3 gap-3"
                >
                  <span className="text-gray-400 text-[10px] sm:text-xs font-semibold tracking-wide">
                    {item.label}
                  </span>

                  <span className="text-gray-200 text-[11px] sm:text-sm font-medium text-right wrap-break">
                    {item.value}
                  </span>
                </div>
              ))}

            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h3 className="text-white text-sm sm:text-base font-extrabold uppercase mb-3">
                INSTRUCTIONS
              </h3>

              <ol className="list-decimal list-inside space-y-2">
                {workout.instructions.map((instruction:string, index:number) => (
                  <li
                    key={index}
                    className="text-gray-400 text-xs sm:text-sm leading-relaxed"
                  >
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
              <Addbtn workout={workout} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default daynamicPage;
