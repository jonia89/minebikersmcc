import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ViewerCounter() {
  let [newVisitors, setNewVisitors] = useState(0);
  let [uniqueVisitors, setUniqueVisitors] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId") || uuidv4();
    const storedUniqueVisitors =
      JSON.parse(localStorage.getItem("uniqueVisitors")) || [];

    if (!storedUniqueVisitors.includes(userId)) {
      const updatedUniqueVisitors = [...storedUniqueVisitors, userId];
      localStorage.setItem(
        "uniqueVisitors",
        JSON.stringify(updatedUniqueVisitors)
      );
      setUniqueVisitors(updatedUniqueVisitors);
      setNewVisitors(newVisitors + 1);
      console.log("New visitor!", userId);
    } else {
      console.log("Already visited!", userId);
    }

    // Set the initial count of new visitors
    setNewVisitors(storedUniqueVisitors.length);
  }, []);

  return <div>Olet {uniqueVisitors.length}. vierailija</div>;
}
