import MerryChristmas from "./Greetings/ChristmasGreeting";
import HappyNewYear from "./Greetings/NewYearGreeting";

export default function HolidayGreeter() {
  const date = new Date().toDateString().split(" ");

  return (
    <div>
      {date[1] === "Dec" && +date[2] > 0 && +date[2] < 27 ? (
        <div className="holiday-greeting-christmas">
          <MerryChristmas />
        </div>
      ) : (
        <div className="holiday-greeting-christmas">
          <h1>Hyvää päivää</h1>
        </div>
      )}
      {(date[1] === "Dec" && +date[2] > 30) ||
      (date[1] === "Jan" && +date[2] < 7) ? (
        <div className="holiday-greeting-newyear">
          <HappyNewYear />
        </div>
      ) : (
        <div className="holiday-greeting-newyear">
          <h1>Hyvää päivää</h1>
        </div>
      )}
    </div>
  );
}
