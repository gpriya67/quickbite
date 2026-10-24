import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Fail() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop")`,
      }}
    >
      {/* Background Dimming & Blur Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>

      {/* Error Card */}
      <div className="relative z-10 w-full max-w-[460px] bg-white rounded-[32px] px-8 py-10 sm:px-10 shadow-2xl text-center">
        {/* Red Error Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Login Failed
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          The username or password you entered is incorrect. <br />
          Please check your details and try again.
        </p>

        {/* Tips Box */}
        <div className="bg-gray-50/80 rounded-2xl p-4 text-xs text-gray-600 text-left mb-6 space-y-1.5 border border-gray-100">
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Check that Caps Lock is off</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Make sure your username is spelled correctly</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Use "Forget Password?" to reset it</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full h-12 bg-gray-950 hover:bg-black text-white font-bold rounded-full text-sm transition active:scale-[0.99] shadow-md cursor-pointer"
          >
            Try Again
          </button>

          <button
            type="button"
            className="w-full h-12 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold rounded-full text-sm transition active:scale-[0.99] cursor-pointer"
          >
            Forget Password?
          </button>
        </div>

        {/* Footer Link */}
        <p className="mt-7 text-xs text-gray-500">
          Did not have any account?{" "}
          <Link to="/" className="font-bold text-gray-900 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Fail;