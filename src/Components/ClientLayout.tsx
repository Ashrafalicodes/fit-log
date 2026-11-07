import React from "react";
import Navbar from "./Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WorkoutContextProvider } from "@/context/WorkoutContext";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <WorkoutContextProvider>
      <Navbar />
      <main>{children}</main>
    </WorkoutContextProvider>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      
    </div>
  );
};

export default ClientLayout;
