import React, { useState } from "react";
import { signupAPI } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const pageContainer = "min-h-screen flex justify-center items-center bg-[#011616ff]";
const cardContainer = "w-[450px] p-10 border border-[#00ff15] rounded-[50px] shadow-[0_0_15px_rgba(0,110,255,1)] text-center bg-[#414142ff]";
const formContainer = "flex flex-col gap-4";
const inputField = "p-2.5 rounded border border-[#00ff15] bg-[#2b2b2b] text-white placeholder-[#00ff15]";
const labelField = "text-left font-bold text-[#00ff15]";
const submitButton = "p-2.5 rounded bg-[#007bff] text-white font-bold cursor-pointer";

export default function Signup() {
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signupAPI({ f_name, l_name, email, password });
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className={pageContainer}>
      <div className={cardContainer}>
        <h1 className="mb-7 text-3xl font-bold text-[#00ff15]">Signup</h1>
        <form className={formContainer} onSubmit={handleSignup}>
          <label className={labelField}>First Name:</label>
          <input type="text" placeholder="Enter your first name" className={inputField} value={f_name} onChange={(e) => setFName(e.target.value)} required />
          <label className={labelField}>Last Name:</label>
          <input type="text" placeholder="Enter your last name" className={inputField} value={l_name} onChange={(e) => setLName(e.target.value)} required />
          <label className={labelField}>Email:</label>
          <input type="email" placeholder="Enter your email" className={inputField} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label className={labelField}>Password:</label>
          <input type="password" placeholder="Enter your password" className={inputField} value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className={submitButton}> Signup </button>
        </form> </div> </div> ); }
