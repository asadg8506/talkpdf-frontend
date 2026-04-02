//navbar
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navContainer ="w-full flex justify-between items-center px-10 py-4 bg-[#011616ff] border-b border-[#00ff15] shadow-[0_0_15px_rgba(0,255,100,0.3)]";
const normalLink ="px-4 py-2 rounded-lg text-[#00ff15] no-underline hover:bg-[#00ff15] hover:text-black transition duration-200";
const logoutButton ="px-4 py-2 rounded bg-[#007bff] text-white font-bold cursor-pointer hover:bg-blue-700 transition duration-200";
const activeLink ="px-4 py-2 rounded-lg bg-[#00ff15] text-black font-medium shadow-[0_0_10px_#00ff15]";
const logoStyle ="text-4xl font-bold text-[#00ff15]";
const navLinks ="flex gap-6 items-center";


export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 
  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <div className={navContainer}>
      <h1 className={logoStyle}>TalkPDF</h1>
      <div className={navLinks}>
        <Link to="/dashboard" className={location.pathname === "/dashboard" ? activeLink : normalLink}>Dashboard</Link>
        <Link to="/upload" className={location.pathname === "/upload"? activeLink : normalLink}>Upload</Link>
        <Link to="/ask" className={location.pathname === "/ask"? activeLink : normalLink}>Ask</Link>
        <Link to="/history" className={location.pathname === "/history" ? activeLink : normalLink}>History</Link>
        <button onClick={handleLogout} className={logoutButton}>Logout</button>
      </div></div>);}
