import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { facebookPosts, instagramPosts } from "../somePosts";
import MotorCycle from "../Components/MotorCycle";
import HolidayGreeter from "../Components/HolidayGreeter";
import ViewerCounter from "../Components/ViewerCounter";
import ErrorBoundary from "../Components/ErrorBoundary";
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
              url={facebookPosts}
              width={350}
            />
          </ErrorBoundary>
        </div>
        <div className="instagram">
          <ErrorBoundary>
            <InstagramEmbed url={instagramPosts[0]} width={328} />
          </ErrorBoundary>
        </div>
      </div>
      <div className="viewercounter">
        <ViewerCounter />
      </div>
    </div>
  );
}
