import Facebookfeed from "../Components/Facebookfeed";
import { InstagramEmbed } from "react-social-media-embed";

export default function Etusivu() {
  const facebookPosts = [
    {
      post: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0hHEZqRehvWUoQyi9GBK1rhUzyxKE4bWaxrFknzBik9RJ8SkyBtp51hg1UkEZcayml%26id%3D100092389456753&show_text=true&width=500",
      height: 520,
    },
    {
      post: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid022a6HEXGfEULsQX5rPmB2oSQdRtb7AjSEPuzpQoChh4hj22MxgXPknPwHwMk513YUl%26id%3D100092389456753&show_text=true&width=500",
      height: 335,
    },
    {
      post: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0KA8Bq3dWfvdM7FDAAh1G9zseFfagsNiRi5qcvQak1S1nrZtGmWwyTmMN2Fqfq9pVl%26id%3D100092389456753&show_text=true&width=500",
      height: 590,
    },
    {
      post: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0aJwQh9d36qe42VR9RL1fLFiBR6BEXu9eKEFXveCcYqcHXC2VKToL16E9Tn8qUk4Ul%26id%3D100092389456753&show_text=true&width=500",
      height: 280,
    },
  ];

  return (
    <div className="frontpage">
      <div>
        <Facebookfeed facebookPosts={facebookPosts[0]} />
        <Facebookfeed facebookPosts={facebookPosts[1]} />
        <Facebookfeed facebookPosts={facebookPosts[2]} />
        <Facebookfeed facebookPosts={facebookPosts[3]} />
      </div>
      <div>
        <iframe
          frameBorder="no border"
          title="Manowar playlist"
          src="https://open.spotify.com/embed/playlist/2CsHDNRmVuWJVT7BhwunX3?utm_source=generator"
          width="300"
          height="460"
          
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div>
      <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
      </div>
    </div>
  );
}
