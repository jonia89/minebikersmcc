import "./Facebook.css"

export default function Facebookfeed(props) {
  return (
    <div className="facebook">
      <iframe
        src={props.facebookPosts.post}
        title="Facebook feed"
        width="300"
        height={props.facebookPosts.height}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
