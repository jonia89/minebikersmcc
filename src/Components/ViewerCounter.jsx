import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ViewerCounter() {
  const [count, setCount] = useState(0);
  let [usedIds, setUsedIDS] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("userId") || uuidv4();
    if (!(id in usedIds) && usedIds.length !== 0) {
      setUsedIDS((prevUsedIds) => [prevUsedIds , id]);
      console.log(usedIds);
      const storedCount = localStorage.getItem("pageVisits");
      const initialCount = storedCount ? Number(storedCount) : 0;
      setCount(initialCount + 1);
      localStorage.setItem("pageVisits", initialCount + 1);
      localStorage.setItem("userId", id);
    } else {
      console.log("hello again", usedIds, id);
      setUsedIDS(usedIds);
    }
  }, [usedIds]);

  return <div className="viewercounter">Sivua katsottu {count} kertaa</div>;
}
