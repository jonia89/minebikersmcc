import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import MotorCycle from "../Components/MotorCycle";
import "./Frontpage.css";

export default function Home(props) {
  return (
    <div>
      <div className="mcstyle">
        <MotorCycle />
      </div>
      <div className="frontpage">
        <div className="facebook">
          <FacebookEmbed
            url="https://www.facebook.com/photo/?fbid=205991242490523&set=a.125268610562787"
            width={328}
          />
        </div>
        <div className="instagram">
          <InstagramEmbed
            url="https://www.instagram.com/p/CwcC7dkIHjy/"
            width={328}
          />
        </div>
      </div>
    </div>
  );
}
