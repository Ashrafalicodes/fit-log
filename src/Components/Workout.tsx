import { WorkoutType } from '@/types/workoutTypes';
import React from 'react';
import Card from './Card';

const Workout = ({ workouts }: { workouts: WorkoutType[] }) => {
    return (
       <section className = 'bg-[#0B0C0F]'>
         <div className = "container mx-auto text-white mb-4 ">
            <h2 className="text-2xl font-bold ">THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {
                    workouts.map((workout) => <Card key={workout.id} workout={workout} />)
                }
            </div>
        </div>
       </section>
    );
};

export default Workout;