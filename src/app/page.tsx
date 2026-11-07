import Banner from "@/Components/Banner";
import Workout from "@/Components/Workout";
import { getAllWorkouts } from "@/lib/api";
import { WorkoutType } from "@/types/workoutTypes";


export default async function Home() {
  const workouts: WorkoutType[] = await getAllWorkouts();
  
  return (
    
  <div>
    <Banner></Banner>
   <Workout  workouts={workouts.slice(0, 6)} />
  </div>
  );
}
