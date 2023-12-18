import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { facebookPosts, instagramPosts } from "../../somePosts";
import "./MobileFrontpage.css";
import { useState } from "react";
import MotorCycle from "../../Components/MotorCycle";

export default function MobileHome() {
  const [facebookActive, setFacebookActive] = useState(false);
  const [instagramActive, setInstagramActive] = useState(false);

  function activateFacebook() {
    setInstagramActive(false);
    setFacebookActive(true);
    if (facebookActive === true) {
      setFacebookActive(false);
    }
  }
  function activateInstagram() {
    setFacebookActive(false);
    setInstagramActive(true);
    if (instagramActive === true) {
      setInstagramActive(false);
    }
  }

  return (
    <div className="mobile-frontpage">
      <div className="mobile-some-buttongroup">
        <button className="mobile-some-button" onClick={activateFacebook}>
          Facebook
        </button>
        <button className="mobile-some-button" onClick={activateInstagram}>
          Instagram
        </button>
      </div>
      <div className="mobile-mcstyle">
        <MotorCycle />
      </div>
      {facebookActive === true && instagramActive === false ? (
        <div className="mobile-facebook">
          <FacebookEmbed
            className="mobile-facebook-bg"
            url={facebookPosts[0]}
            width={340}
          />
        </div>
      ) : (
        ""
      )}

      {facebookActive === false && instagramActive === true ? (
        <div className="mobile-instagram">
          <InstagramEmbed url={instagramPosts[0]} width={340} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
