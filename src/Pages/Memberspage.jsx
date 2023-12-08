import Member from "../Components/Member";
import "./Memberspage.css"

export default function Members(props) {
  

  return (
    <div className="members">
      <div className="members-bg">
        {props.members.map((member) => (
          <Member key={member.id} members={member} />
        ))}
      </div>
    </div>
  );
}
