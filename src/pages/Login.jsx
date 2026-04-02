// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const pageContainer ="min-h-screen flex justify-center items-center bg-[#011616ff]";
const cardContainer ="w-[450px] p-10 border border-[#00ff15] rounded-[50px] shadow-[0_0_15px_rgba(0,110,255,1)] text-center bg-[#414142ff]";
const formContainer = "flex flex-col gap-4";
const inputField ="p-2.5 rounded border border-[#00ff15] bg-[#2b2b2b] text-white placeholder-[#00ff15]";
const labelField = "text-left font-bold text-[#00ff15]";
const errorText = "text-red-400 text-sm text-left -mt-2";
const forgotStyle = "text-right text-sm m-0";
const linkStyle = "text-[#007bff] no-underline";
const submitButton ="p-2.5 rounded bg-[#007bff] text-white font-bold cursor-pointer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const validate = () => {
    let newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className={pageContainer}>
      <div className={cardContainer}>
        <h1 className="mb-7 text-3xl font-bold text-[#00ff15]">Login</h1>
        <form className={formContainer} onSubmit={handleLogin}>
          <label className={labelField}>Email:</label>
          <input type="email" className={inputField} value={email} onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <p className={errorText}>{errors.email}</p>}

          <label className={labelField}>Password:</label>
          <input type="password" className={inputField} value={password} onChange={(e) => setPassword(e.target.value)}/>
          {errors.password && <p className={errorText}>{errors.password}</p>}

          <p className={forgotStyle}>
            <a href="#" className={linkStyle}> Forgot Password? </a>
          </p>

          <button type="submit" className={submitButton} disabled={loading}> {loading ? "Logging in..." : "Login"}</button>
        </form> </div> </div> ); }