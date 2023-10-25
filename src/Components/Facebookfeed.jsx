export default function Facebookfeed(props) {
  return (
    <div className="facebook">
      <iframe
        src={props.facebookPosts}
        title="Facebook feed"
        width="250"
        height="550"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
