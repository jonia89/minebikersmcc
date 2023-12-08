import Member from "../../Components/Member";
import "./MobileMemberspage.css"

export default function MobileMembers(props) {
 

  return (
    <div className="mobile-members">
      <div className="mobile-members-bg">
        {props.members.map((member) => (
          <Member key={member.id} members={member} />
        ))}
      </div>
    </div>
  );
}
