import React, { useState } from 'react';

const pageContainer = "min-h-screen flex justify-center items-center bg-[#011616ff]";
const cardContainer = "w-[450px] p-10 border border-[#00ff15] rounded-[50px] shadow-[0_0_15px_rgba(0,110,255,1)] text-center bg-[#414142ff]";
const formContainer = "flex flex-col gap-4";
const inputField = "p-2.5 rounded border border-[#00ff15] bg-[#2b2b2b] text-white placeholder-[#00ff15]";
const labelField = "text-left font-bold text-[#00ff15]";
const forgotStyle = "text-right text-sm m-0";
const linkStyle = "text-[#007bff] no-underline";
const submitButton = "p-2.5 rounded bg-[#007bff] text-white font-bold cursor-pointer";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // 🔥 this prevents page reload

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.message) {
        alert("Login successful!");

        // Optionally save token
        localStorage.setItem("access_token", data.access_token);

      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  return (
    <div className={pageContainer}>
      <div className={cardContainer}>
        <h1 className="mb-7 text-3xl font-bold text-[#00ff15]">Login</h1>

        <form className={formContainer} onSubmit={handleLogin}> 
          <label className={labelField}>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={labelField}>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className={inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className={forgotStyle}>
            <a href="#" className={linkStyle}>Forgot Password?</a>
          </p>

          <button type="submit" className={submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
