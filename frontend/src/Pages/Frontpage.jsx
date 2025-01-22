import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { facebookPosts, instagramPosts } from "../somePosts";
import MotorCycle from "../Components/MotorCycle";
import HolidayGreeter from "../Components/HolidayGreeter";
import ErrorBoundary from "../Components/ErrorBoundary";
import Visitors from "../Components/VisitorCounter";
import "./Frontpage.css";

export default function Home() {
  return (
    <div>
      <div className="mcstyle">
        <MotorCycle />
      </div>
      <div>
        <HolidayGreeter />
      </div>
      <div className="frontpage">
        <div className="facebook">
          <ErrorBoundary>
            <FacebookEmbed
              className="facebook-bg"
              url={facebookPosts[0]}
              width={335}
            />
          </ErrorBoundary>
        </div>
        <div className="instagram">
          <ErrorBoundary>
            <InstagramEmbed url={instagramPosts[0]} width={328} />
          </ErrorBoundary>
        </div>
      </div>
      <div className="visitor-counter">
          <Visitors/>
        </div>
    </div>
  );
}
