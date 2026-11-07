'use client'

import { WorkoutContextType, WorkoutType } from "@/types/workoutTypes"
import { ReactNode, useState, createContext, useContext } from "react"

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

export function WorkoutContextProvider({ children }: { children: ReactNode }) {

    const [workouts, setWorkouts] = useState<WorkoutType[]>([])
    const [myPlan, setMyPlan] = useState<WorkoutType[]>([])

    const value = {
        workouts,
        setWorkouts,
        myPlan,
        setMyPlan
    }

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContext

export function useWorkoutContext() {
    const context = useContext(WorkoutContext)
    if (!context) {
        throw new Error("useWorkoutContext must be used within a WorkoutContextProvider")
    }
    return context }