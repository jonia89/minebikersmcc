import "./Members.css"

export default function Member(props) {
  const clickHandler = (event) => {
    event.target.requestFullscreen();
  };

  return (
    <div>
      <div className="members">
        <img
          onClick={clickHandler}
          src={props.members.photo}
          alt={props.members.name}
          width={300}
          height={200}
        />
        <div>
          <h2>{props.members.name}</h2>
          <p>{props.members.intro}</p>
        </div>
      </div>
    </div>
  );
}
