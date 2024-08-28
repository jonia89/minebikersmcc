import { useState, useEffect } from "react";
import visitorData from "../visitor_data.json";
import "./VisitorCounter.css";

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    setVisitors(visitorData);
  }, []);

  const totalVisitors = visitors.reduce((acc, curr) => acc + curr.visitors, 0);
  const sortedVisitors = visitors.sort((a, b) => b.visitors - a.visitors);
  const topFiveVisitors = sortedVisitors.slice(0, 5);

  return (
    <div>
      <div className="visitor-header">
        <u> Eniten vierailijoita</u>
      </div>
      {topFiveVisitors.length > 0 ? (
        <div className="visitor-data">
          {topFiveVisitors.map((visitor, index) => (
            <div key={index}>
              {visitor.country}: {visitor.visitors}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading visitor data...</p>
      )}
      <div className="visitor-footer">
        Vierailijoita yhteensä: {totalVisitors} 
      </div>
    </div>
  );
}
