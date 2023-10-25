import Member from "../Components/Member";
import photo from "../Images/members/logosmall.jpg";

export default function Jäsenet() {
  const members = [
    {
      photo: photo,
      name: "Simo",
      intro:
        "Hylätyillä leirintävarusteilla täytetty rikkinäinen makuupussi joka jätettiin aikoinaan jögevatreffin leirintäalueelle. Simoa muistellaan joka vuosi ja otetaan huikat.",
    },
  ];

  return (
    <div>
      <h2 className="wordexplanation">Kerhomme jäsenet:</h2>
      <div>
        <Member members={members[0]} />
        <Member members={members[0]} />
      </div>
    </div>
  );
}
