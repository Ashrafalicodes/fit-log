
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#13161D] flex flex-col items-center justify-center text-white">

      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-gray-700 border-t-[#A3E635] rounded-full animate-spin"></div>

      <h2 className="text-xl font-semibold mt-6">
        Loading...
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        Please wait while we load your data.
      </p>

    </div>
  );
};

export default Loading;
