export const getAllWorkouts = async () => {
    const response = await fetch ('https://api.abcz.workers.dev/api/fitlog');
    return response.json(); 
} 

export const getWorkoutById = async (id: string) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    return response.json();
}