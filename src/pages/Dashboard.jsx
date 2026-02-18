import Navbar from "../components/Navbar";
import React from "react";
export default function Dashboard() {


  const pageContainer ="min-h-screen flex flex-col bg-[#011616ff]";
  const contentWrapper ="flex flex-1 justify-center items-center px-6";
  const contentBox ="w-full max-w-3xl p-12 rounded-[40px] border border-[#00ff15] bg-[#414142ff] shadow-[0_0_25px_rgba(0,255,21,0.3)] text-center";
  const headingStyle = "text-5xl font-extrabold text-[#00ff15] mb-6 tracking-wide";
  const subHeadingStyle = "text-2xl text-[#00ff15] opacity-80 mb-8";
  const descriptionStyle ="text-gray-300 text-lg leading-relaxed";

  return (
    <div className={pageContainer}>
      <Navbar />
      <div className={contentWrapper}>
        <div className={contentBox}>
          <h1 className={headingStyle}> Welcome to TalkPDF </h1>
          <h2 className={subHeadingStyle}> Smart AI-Based PDF Interaction Platform </h2>
          <p className={descriptionStyle}>
            TalkPDF empowers you to upload your PDF documents and interact
            with them using advanced AI technology. Instead of manually
            scrolling through pages, simply ask questions and receive
            intelligent, contextual answers instantly. Designed to make
            document understanding faster, smarter, and more efficient.
          </p> </div> </div> </div> ); }


