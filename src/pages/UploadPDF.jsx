import { useState } from "react";
import { uploadPDF } from "../api/pdf.api";
import Navbar from "../components/Navbar";

export default function UploadPDF() {

  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");



  const pageContainer ="min-h-screen flex flex-col bg-[#011616ff]";
  const contentWrapper ="flex flex-1 justify-center items-center px-6";
  const contentBox ="w-full max-w-xl p-10 rounded-[35px] border border-[#00ff15] bg-[#414142ff] shadow-[0_0_25px_rgba(0,255,21,0.3)] text-center";
  const headingStyle ="text-3xl font-bold text-[#00ff15] mb-6";
  const inputStyle ="block w-full mb-6 p-3 rounded border border-[#00ff15] bg-[#2b2b2b] text-white";
  const buttonStyle ="px-6 py-2 rounded bg-[#007bff] text-white font-semibold cursor-pointer hover:bg-blue-700 transition duration-200";
  const messageStyle = "mt-6 text-[#00ff15] font-medium";

  // ===== Upload Handler =====
  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await uploadPDF(formData);
      setMsg(res.data.message);
    } catch {
      setMsg("Upload failed");
    }
  };

  return (
    <div className={pageContainer}> <Navbar />
      <div className={contentWrapper}>
        <div className={contentBox}>
          <h2 className={headingStyle}>Upload Your PDF </h2>
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className={inputStyle} />
          <button onClick={handleUpload} className={buttonStyle}> Upload </button>
          {msg && ( <p className={messageStyle}> {msg} </p> )}
        </div> </div> </div> );}


