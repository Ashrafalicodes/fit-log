export interface WorkoutType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
export interface WorkoutContextType {
  workouts: WorkoutType[];
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
  myPlan: WorkoutType[];
  setMyPlan: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
}