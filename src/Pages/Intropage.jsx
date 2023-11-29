import "./Intropage.css";

export default function Intro() {
  return (
    <div className="intro">
      <h2 className="h2-intro">Minebikers MCC esittäytyy:</h2>
      <p className="p-intro">
        Minebikers on Vantaan Kaivokselassa vuonna 2000 perustettu ja edelleen
        toimiva moottoripyöräharrastajien kerho. Emme ole yhdistysrekisterissä,
        mutta keväällä 2023 haimme kerholle ja sen väreille hyväksynnän Biker
        Meetingissä. Kerhomme jäsenillä ja jäsenyyttä haluavilla tulee olla
        vähintään 500-kuutioinen moottoripyörä tai ainakin aikomus hankkia
        sellainen. Merkillä ei ole väliä, toki Suzukin hankkineet joutuvat
        selittelemään valintaansa vähemmän ja isoon Intruderiin päätyneet saavat
        suitsutusta parhaasta mahdollisesta valinnasta.
      </p>
      <p className="p-intro">
        Parhaimmillaan 2000-luvun alkuvuosina jäseniä oli yli 20, mutta aika ja
        evoluutio ovat karsineet vanhemmasta päästä porukkaa sohvan hellään
        huomaan. Aktiivisten jäsenten määrä on tällä hetkellä 12 henkilöä ja
        parhaimmillaan ajeluihin on saatu lähes kaikki liikekannalle.
        Kerhotiloja meillä ei vielä ole (haku on päällä) joten pyörien säilytys-
        ja huoltotoiminta on jäänyt jokaisen omaksi ratkaistavaksi.
      </p>
      <p className="p-intro">
        Vuosittaisena päätapahtumana on alusta alkaen ollut Viron Jögevassa
        heinä-elokuun vaihteessa järjestettävä Jögevatreff. Tämä lajinsa
        suurimpaan tapahtumiin euroopassa kuuluva jotos on vetänyt
        motoristejamme jo vuosikymmenten ajan, kokeneimmilla jäsenillä on
        takanaan jo parisenkymmentä suoritusta vaikka välivuosia on väkisinkin
        kaikille tullut. Eikä ihme, sillä mikä voisi voittaa huonosti nukuttua
        viikonloppua ja suurella todennäköisyydellä kastumista joko teltassa tai
        viimeistään paluumatkan vesisateessa...
      </p>
    </div>
  );
}
