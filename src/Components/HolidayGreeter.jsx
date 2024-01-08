import MerryChristmas from "./Greetings/ChristmasGreeting";
import HappyNewYear from "./Greetings/NewYearGreeting";

export default function HolidayGreeter() {
  const date = new Date().toDateString().split(" ");
  if (date[1] === "Dec" && +date[2] > 0 && +date[2] < 27) {
    return (
      <div className="holiday-greeting-christmas">
        <MerryChristmas />
      </div>
    );
  } else if (
    (date[1] === "Dec" && +date[2] > 30) ||
    (date[1] === "Jan" && +date[2] > 0 && +date[2] < 7)
  ) {
    return (
      <div className="holiday-greeting-newyear">
        <HappyNewYear />
      </div>
    );
  }
}
