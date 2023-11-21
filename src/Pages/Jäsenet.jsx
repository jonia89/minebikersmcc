import Member from "../Components/Member";
import photo from "../Images/members/logosmall.jpg";
import "./Memberpage.css"

export default function Jäsenet() {
  const members = [
    {
      photo: photo,
      name: "Simo",
      intro:
        "Hylätyillä leirintävarusteilla täytetty rikkinäinen makuupussi joka jätettiin aikoinaan jögevatreffin leirintäalueelle. Simoa muistellaan joka vuosi ja otetaan huikat.",
    }, {
      photo: photo,
      name: "Simo",
      intro:
        "Hylätyillä leirintävarusteilla täytetty rikkinäinen makuupussi joka jätettiin aikoinaan jögevatreffin leirintäalueelle. Simoa muistellaan joka vuosi ja otetaan huikat.",
    },
  ];

  return (
    <div className="members">
      <div>
        {members.map((member) => (
          <Member members={member} />
        ))}
      </div>
    </div>
  );
}
