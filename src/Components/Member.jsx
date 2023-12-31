import "./Member.css"

export default function Member(props) {

  return (
    <div>
      <div className="member">
        <img
          
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
