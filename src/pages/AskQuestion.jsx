import { useState } from "react";
import { askQuestion } from "../api/pdf.api";
import Navbar from "../components/Navbar";

export default function AskQuestion() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const pageContainer = "min-h-screen flex flex-col bg-[#011616ff]";
  const contentArea = "flex-1 px-20 py-10 text-white";
  const headingStyle = "text-3xl font-bold text-[#00ff15] mb-6";
  const textareaStyle = "w-full p-3 rounded border border-[#00ff15] bg-[#2b2b2b] text-white";
  const buttonStyle = "mt-4 px-6 py-2 rounded bg-[#007bff] text-white font-semibold cursor-pointer";
  const answerStyle = "mt-8 text-gray-300 leading-relaxed";

  const handleAsk = async () => {
    if (!question) return;
    setAnswer("Getting answer...");

    try {
      const res = await askQuestion(question);
      setAnswer(res.data.answer);
    } catch { setAnswer("No answer found"); } };

  return (
    <div className={pageContainer}> <Navbar />
      <div className={contentArea}>
        <h2 className={headingStyle}>Ask Your PDF Anything</h2>
        <textarea rows="1" placeholder="Type your question..." value={question} onChange={(e) => setQuestion(e.target.value)} className={textareaStyle}/>
        <button onClick={handleAsk} className={buttonStyle}> Ask </button>

        {answer && ( <p className={answerStyle}> {answer} </p> )} </div> </div> ); }
