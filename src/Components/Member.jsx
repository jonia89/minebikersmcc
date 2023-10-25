export default function Member(props) {
  return (
    <div className="members">
      <iframe
        title="member"
        src={props.members.photo}
        height={props.members.height}
        width={props.members.width}
      />
      <div>
        <h2>{props.members.name}</h2>
        <p>{props.members.intro}</p>
      </div>
    </div>
  );
}
