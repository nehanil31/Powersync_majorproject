import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
      {/* Logo with spinning border */}
      <div className="relative">
        {/* Spinning border */}
        <div
          className="w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
          style={{
            animation: "spin 1s linear infinite", // Spinner animation
          }}
        ></div>

        {/* Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/newlog.png`}
          alt="Logo"
          className="absolute inset-0 w-32 h-24 mb-4 m-auto rounded-full"
        />

        {/* Sliding text */}
        <p
          className="absolute -bottom-10 left-0 text-center text-xl font-bold text-gray-700 animate-slide pt-5"
        >
          Power Sync
        </p>
      </div>

      {/* Tailwind CSS animation for sliding text */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide {
            animation: slide 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
