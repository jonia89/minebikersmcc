import "./Guestbookpage.css";

export default function Guestbook() {


const handleMessageSubmit = () => {
    console.log("Lähetetty");
  };

  return (
    <div className="guestbook">
      <div>
        <h1>Vieraskirja</h1>
      </div>
      <div className="nimimerkki">
        <input type="text" placeholder="nimimerkki"/>
      </div>
      <textarea
        className="tekstikenttä"
        placeholder="kirjoita viesti"
        rows={10}
      ></textarea>
      <div>
        <button className="lähetänappi" onClick={handleMessageSubmit}>Lähetä</button>
      </div>
    </div>
  );
}
