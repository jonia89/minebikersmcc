import Member from "../Components/Member";
import photo from "../Images/members/logosmall.jpg";
import "./Memberspage.css"

export default function Members() {
  const members = [
    {
      photo: photo,
      name: "Simo",
      intro:
        "Hylätyillä leirintävarusteilla täytetty rikkinäinen makuupussi joka jätettiin aikoinaan jögevatreffin leirintäalueelle. Simoa muistellaan joka vuosi ja otetaan huikat.",
    id:"member1"
      }, {
      photo: photo,
      name: "Simo",
      intro:
        "Hylätyillä leirintävarusteilla täytetty rikkinäinen makuupussi joka jätettiin aikoinaan jögevatreffin leirintäalueelle. Simoa muistellaan joka vuosi ja otetaan huikat.",
    id:"member2"
      },
  ];

  return (
    <div className="members">
      <div>
        {members.map((member) => (
          <Member key={member.id} members={member} />
        ))}
      </div>
    </div>
  );
}
