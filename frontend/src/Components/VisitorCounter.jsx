/* Thanks to catamphetamine!
https://github.com/catamphetamine/country-flag-icons/tree/master
#svg #country_flag_icons
*/
import { useState, useEffect } from "react";
import visitorData from "../visitor_data.json";
import "./VisitorCounter.css";
import { flags } from "../importFlags";

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);
  const [allVisitors, setAllVisitors] = useState(false);
  const [visitorButtonText, setVisitorButtonText] = useState("Näytä kaikki");

  useEffect(() => {
    setVisitors(visitorData);
  }, []);

  const visitorButtonHandler = () => {
    if (allVisitors === false) {
      setAllVisitors(true);
      setVisitorButtonText("Näytä vähemmän");
    } else {
      setAllVisitors(false);
      setVisitorButtonText("Näytä kaikki");
    }
    console.log(allVisitors);
    return visitorButtonText;
  };

  const totalVisitors = visitors.reduce((acc, curr) => acc + curr.visitors, 0);
  const sortedVisitors = visitors.sort((a, b) => b.visitors - a.visitors);
  const topTenVisitors = sortedVisitors.slice(0, 10);
  const restVisitors = sortedVisitors.slice(10);

  return (
    <div>
      <div className="visitor-header">
        <u>Kävijöitä</u>
      </div>
      {topTenVisitors.length > 0 ? (
        <div className="visitor-data">
          {topTenVisitors.map((visitor, index) => (
            <div key={index}>
              <img
                style={{ border: "1px groove white" }}
                src={flags[visitor.flag]}
                alt={visitor.flag}
                title={visitor.country}
              />
              {visitor.visitors}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading visitor data...</p>
      )}
      {allVisitors === true ? (
        <div className="all-visitor-data">
          {restVisitors.map((visitor, index) => (
            <div key={index}>
              <img
                style={{ border: "1px groove white" }}
                src={flags[visitor.flag]}
                alt={visitor.flag}
                title={visitor.country}
              />
              {visitor.visitors}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="show-all">
        <button className="show-all-button" onClick={visitorButtonHandler}>
          {visitorButtonText}
        </button>
      </div>
      <div className="visitor-footer">Kävijöitä yhteensä: {totalVisitors}</div>
    </div>
  );
}
