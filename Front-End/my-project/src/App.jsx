import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };




  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const handleClick = (e) => {
    e.preventDefault();
    const loginDetail = axios.get(
      `${API_URL}/login?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`
    );
    loginDetail
      .then((data) => {
        if (data.data === true) {
          navigate('/home');
          console.log("Login Successfully");
        } else {
          navigate('/fail');
          console.log("Login Failed");
        }
      })
      .catch((err) => {
        console.error("Error connecting to server:", err);
        navigate('/fail');
      });
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop")`,
      }}
    >
      {/* Background Dimming & Blur Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[460px] bg-white rounded-[32px] px-8 py-10 sm:px-10 shadow-2xl text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Welcome Back!
        </h1>
        <p className="text-sm text-gray-500 mb-7">
          Sign in with your Username and Password.
        </p>

        {/* Form */}
        <form onSubmit={handleClick} autoComplete="off" className="flex flex-col gap-3.5">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user}
              onChange={handleChangeUser}
              autoComplete="off"
              required
              className="w-full h-12 px-6 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={handleChangePass}
              autoComplete="new-password"
              required
              className="w-full h-12 px-6 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          <div className="flex justify-end -mt-1">
            <a
              href="#forgot"
              className="text-xs font-semibold text-gray-900 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-12 mt-1 bg-gray-900 hover:bg-black text-white font-bold rounded-full text-sm transition active:scale-[0.99] shadow-md cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400">or login with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="w-full h-12 flex items-center justify-center gap-2.5 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition active:scale-[0.99] cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.17 0 9.99 0 12s.46 3.83 1.26 5.42l4.02-3.13z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
              />
            </svg>
            Login with Google
          </button>

          <button
            type="button"
            className="w-full h-12 flex items-center justify-center gap-2.5 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition active:scale-[0.99] cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#1877F2"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            Login with Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="mt-7 text-xs text-gray-500">
          Did not have any account?{" "}
          <a href="#register" className="font-bold text-gray-900 hover:underline">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
