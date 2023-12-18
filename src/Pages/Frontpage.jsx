import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { facebookPosts, instagramPosts } from "../somePosts";
import MotorCycle from "../Components/MotorCycle";
import "./Frontpage.css";

export default function Home() {
  return (
    <div className="frontpage">
      <div className="mcstyle">
        <MotorCycle />
      </div>
      <div className="facebook">
        <FacebookEmbed
          className="facebook-bg"
          url={facebookPosts[0]}
          width={328}
        />
      </div>
      <div className="instagram">
        <InstagramEmbed url={instagramPosts[0]} width={328} />
      </div>
    </div>
  );
}
