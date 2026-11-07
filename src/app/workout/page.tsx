import Banner from '@/Components/Banner';
import Workout from '@/Components/Workout';
import { getAllWorkouts } from '@/lib/api';
import React from 'react';

const workOutPage = async () => {
    const workouts = await getAllWorkouts();

    return (
        <div>
            <Banner></Banner>
   <Workout workouts={workouts} />
  </div>
    );
};

export default workOutPage;
