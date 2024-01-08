import MerryChristmas from "../Components/Greetings/ChristmasGreeting";
import HappyNewYear from "../Components/Greetings/NewYearGreeting";
import "./MobileHolidayGreeter.css"

export default function MobileHolidayGreeter() {
  const date = new Date().toDateString().split(" ");

  return (
    <div>
      {date[1] === "Dec" && +date[2] > 0 && +date[2] < 27 ? (
        <div className="mobile-holiday-greeting-christmas">
          <MerryChristmas />
        </div>
      ) : (
        ""
      )}
      {(date[1] === "Dec" && +date[2] > 30) ||
      (date[1] === "Jan" && +date[2] < 7) ? (
        <div className="mobile-holiday-greeting-newyear">
          <HappyNewYear />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
