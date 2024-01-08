import MerryChristmas from "../Components/Greetings/ChristmasGreeting";
import HappyNewYear from "../Components/Greetings/NewYearGreeting";

export default function HolidayGreeter() {
  const date = new Date().toDateString().split(" ");
  if (date[1] === "Dec" && +date[2] > 0 && +date[2] < 27) {
    return (
      <div className="mobile-holiday-greeting-christmas">
        <MerryChristmas />
      </div>
    );
  } else if (date[1] === "Dec" && +date[2] > 30) {
    return (
      <div className="mobile-holiday-greeting-newyear">
        <HappyNewYear />
      </div>
    );
  }
}
