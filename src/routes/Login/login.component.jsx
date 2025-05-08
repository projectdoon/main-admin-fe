import React, { useRef, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
// import ImgBack from '../../assets/login.jpg';
import LoginBg from "../../assets/login2.png";
import Logo from "../../assets/logoMain.png";
import Button from "../../components/Button";

export default function Login({ onLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setEmail, setIsAuthenticated, setIsAdmin } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Updated login validation with distinct emails for each role
    if (
      (email === "test@garbage.com" || 
       email === "admin@admin.com" || 
       email === "test@water.com" || 
       email === "test@dead.com" || 
       email === "test@stagnent.com" || 
       email === "test@road.com" || 
       email === "test@transport.com" || 
       email === "test@toilet.com" || 
       email === "test@manhole.com") &&
      password === "1"
    ) {
      setEmail(email); // Save the email in context
      setIsAuthenticated(true);
      setIsAdmin(email === "admin@admin.com"); // Set admin status
      setLoggedIn(true);
      onLogin(true); // Notify parent component
    } else {
      setErrorMessage("Please fill in both fields");
      setLoggedIn(false);
      onLogin(false);
    }
  }

  if (loggedIn) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 invert-[100%] scale-100"
        style={{ backgroundImage: `url(${LoginBg})` }}
      ></div>
      <div className="relative z-10">
        <div className="relative rounded-full transition duration-300 hover:shadow-custom">
          <svg height="550" width="550">
            <circle cx="275" cy="275" r="275" fill="white" />
          </svg>
          <div className="absolute inset-0  flex items-center justify-center text-white z-30">
            <form onSubmit={handleSubmit}>
              <ul className="flex flex-col w-[120%] right-5 justify-start mt-[-30px] items-center relative">
                <li className="flex items-center justify-center scale-125">
                  <img src={Logo} alt="Logo" className="w-2/3 h-2/3 mb-8" />
                </li>
                <li>
                  <input
                    ref={emailRef}
                    type="email"
                    className="focus:outline-none border-none w-[150%] ml-[-50px] text-slate-900 p-1 my-2 text-lg rounded-xl bg-[#3A81F11A]"
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    type="password"
                    ref={passwordRef}
                    className="focus:outline-none border-none w-[150%] ml-[-50px] text-slate-900 p-1 my-2 text-lg rounded-xl bg-[#3A81F11A]"
                    placeholder="Password"
                  />
                </li>
                {errorMessage && (
                  <li className="text-red-500 text-sm mt-2">{errorMessage}</li>
                )}
                {/* fix the width */}
                <li>
                  <Button type="submit">Login</Button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
