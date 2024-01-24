/* Thanks to CodeCary!
 https://www.youtube.com/watch?v=ASxL5Abgeb8
#css #CodeCary #css_motorcycle #motorcycle_run */
import { useState } from "react";
import "./styleMotorCycle.css";

export default function MotorCycle() {
  const [drive, setDrive] = useState("false");

  return (
    <div
      className="container"
      onClick={() => setDrive("true")}
      onDoubleClick={() => setDrive("false")}
      drive={drive}
    >
      <div className="bike-body">
        <div className="seat"></div>
        <div className="cover"></div>
        <div className="lamp"></div>
        <div className="motor">
          <div className="part-1">
            <div className="part-1-top"></div>
            <div className="part-1-bottom"></div>
          </div>
          <div className="part-2">
            <div className="part-2-base">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="front"></div>
        <div className="back"></div>
      </div>
      <div className="tire"></div>
      <div className="tire"></div>
      <div className="smoke"></div>
    </div>
  );
}
