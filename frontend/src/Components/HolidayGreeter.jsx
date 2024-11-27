import MerryChristmas from "./Greetings/ChristmasGreeting";
import HappyNewYear from "./Greetings/NewYearGreeting";
import JogevaGreeting from "./Greetings/Jogeva";
import "./HolidayGreeter.css";

export default function HolidayGreeter() {
  const date = new Date().toDateString().split(" ");

  return (
    <div>
      {date[1] === "Dec" && +date[2] > 0 && +date[2] < 27 ? (
        <div className="holiday-greeting-christmas">
          <MerryChristmas />
        </div>
      ) : (
        ""
      )}
      {(date[1] === "Dec" && +date[2] > 30) ||
      (date[1] === "Jan" && +date[2] < 7) ? (
        <div className="holiday-greeting-newyear">
          <HappyNewYear />
        </div>
      ) : (
        ""
      )}
      {date[1] === "Jul" && +date[2] >= 25 && +date[2] <= 28 ? (
        <div className="holiday-greeting-jögeva">
          <JogevaGreeting />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
