import React, { useState } from "react";
import { signupAPI } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const pageContainer = "min-h-screen flex justify-center items-center bg-[#011616ff]";
const cardContainer = "w-[450px] p-10 border border-[#00ff15] rounded-[50px] shadow-[0_0_15px_rgba(0,110,255,1)] text-center bg-[#414142ff]";
const formContainer = "flex flex-col gap-4";
const inputField = "p-2.5 rounded border border-[#00ff15] bg-[#2b2b2b] text-white placeholder-[#00ff15]";
const labelField = "text-left font-bold text-[#00ff15]";
const errorText = "text-red-400 text-sm text-left -mt-2";
const submitButton = "p-2.5 rounded bg-[#007bff] text-white font-bold cursor-pointer";

export default function Signup() {
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!f_name) newErrors.f_name = "First name is required";
    if (!l_name) newErrors.l_name = "Last name is required";

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validate()) return;

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
          <input type="text" className={inputField}  value={f_name}  onChange={(e) => setFName(e.target.value)}/>
          {errors.f_name && <p className={errorText}>{errors.f_name}</p>}
          <label className={labelField}>Last Name:</label>
          <input type="text" className={inputField} value={l_name} onChange={(e) => setLName(e.target.value)}/>
          {errors.l_name && <p className={errorText}>{errors.l_name}</p>}
          <label className={labelField}>Email:</label>
          <input type="email" className={inputField}  value={email}  onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <p className={errorText}>{errors.email}</p>}
          <label className={labelField}>Password:</label>
          <input type="password" className={inputField} value={password} onChange={(e) => setPassword(e.target.value)}          />
          {errors.password && <p className={errorText}>{errors.password}</p>}
          <button type="submit" className={submitButton}>Signup</button>
          </form></div></div>);}