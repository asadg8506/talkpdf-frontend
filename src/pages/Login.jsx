import React from 'react';

// Semantic Tailwind classes
const pageContainer = "min-h-screen flex justify-center items-center bg-[#011616ff]";
const cardContainer = "w-[450px] p-10 border border-[#00ff15] rounded-[50px] shadow-[0_0_15px_rgba(0,110,255,1)] text-center bg-[#414142ff]";
const formContainer = "flex flex-col gap-4";
const inputField = "p-2.5 rounded border border-[#00ff15] bg-[#2b2b2b] text-white placeholder-[#00ff15]";
const labelField = "text-left font-bold text-[#00ff15]";
const forgotStyle = "text-right text-sm m-0";
const linkStyle = "text-[#007bff] no-underline";
const submitButton = "p-2.5 rounded bg-[#007bff] text-white font-bold cursor-pointer";

export default function Login() {
  return (
    <div className={pageContainer}>
      <div className={cardContainer}>
        <h1 className="mb-7 text-3xl font-bold text-[#00ff15]">Login</h1>
        <form className={formContainer}>
          <label className={labelField}>Email:</label>
          <input type="email" placeholder="Enter your email" className={inputField} />

          <label className={labelField}>Password:</label>
          <input type="password" placeholder="Enter your password" className={inputField} />

          <p className={forgotStyle}>
            <a href="#" className={linkStyle}>Forgot Password?</a>
          </p>

          <button type="submit" className={submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
}
