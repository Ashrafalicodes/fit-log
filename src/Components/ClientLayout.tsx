
import React from "react";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WorkoutContextProvider } from "@/context/WorkoutContext";
import Footer from "./Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <WorkoutContextProvider>
        <Navbar />

        <main className="bg-[#0C0D10]">
          {children}
        </main>

        <Footer />
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
