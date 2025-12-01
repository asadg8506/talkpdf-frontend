import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

// Tailwind classes
const page = "min-h-screen flex justify-center items-center bg-[#011616ff] text-center";
const card = "p-12 rounded-2xl border-2 border-[#00ff15] shadow-[0_0_15px_rgba(0,255,100,0.8)] bg-[#1c1c1c]";
const title = "text-[#00ff15] text-4xl mb-4";
const text = "text-white text-lg mb-8";
const btn = "px-6 py-2.5 rounded-lg font-bold text-white bg-[#007bff] hover:opacity-90 transition";
const btnAlt = "px-6 py-2.5 rounded-lg font-bold text-black bg-[#00ff15] hover:opacity-90 transition ml-5";
const tab = "px-5 py-2 rounded-lg border border-[#00ff15] bg-[#2b2b2b] text-[#00ff15] font-medium hover:opacity-90 transition";

export default function LoginSignupPage() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div className={page}>
      {!show ? (
        <div className={card}>
          <h1 className={title}>Welcome to TalkPDF</h1>
          <p className={text}>Your AI-powered PDF assistant</p>
          <button className={btn} onClick={() => { setLogin(true); setShow(true); }}>Login</button>
          <button className={btnAlt} onClick={() => { setLogin(false); setShow(true); }}>Signup</button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-5">
           <button onClick={() => { setLogin(true); console.log("login true"); }} className={tab}>Login</button>
           <button onClick={() => { setLogin(false); console.log("login false"); }} className={tab}>Signup</button>
        </div>

          {login ? <Login /> : <Signup />}
        </div>
      )}
    </div>
  );
}


