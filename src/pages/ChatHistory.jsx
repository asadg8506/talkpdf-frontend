import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getHistory } from "../api/pdf.api";

export default function ChatHistory() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const pageContainer = "min-h-screen flex flex-col bg-[#011616ff]";
  const contentArea = "flex-1 px-10 py-8 text-white";
  const headingStyle = "text-3xl font-bold text-[#00ff15] mb-6";
  const card = "p-5 mb-4 rounded-xl border border-[#00ff15] bg-[#2b2b2b]";
  const question = "text-[#00ff15] font-semibold";
  const answer = "text-gray-300 mt-2";

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getHistory();
        setHistory(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchHistory();
  }, []);

  return (
    <div className={pageContainer}>
      <Navbar /> 
      <div className={contentArea}>
        <h2 className={headingStyle}>Chat History</h2>
        {loading ? ( <p>Loading...</p> ) : 
        history.length === 0 ? ( <p>No history found</p> ) : 
        ( history.map((item, index) => (
            <div key={index} className={card}>
              <p className={question}>Q: {item.question}</p>
              <p className={answer}>A: {item.answer}</p>
            </div>
          )) )} </div> </div> );}