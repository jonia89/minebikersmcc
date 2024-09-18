import { useState } from "react";
import "./Guestbook.css";

export default function GuestbookForm() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (nickname.length > 3 && message.length > 3) {
      console.log(nickname + ":", message);
      console.log("Lähetetty");
      setNickname("");
      setMessage("");
    } else {
      alert("Nimimerkin pituus tai viesti on liian lyhyt");
    }
  };

  return (
    <form className="guestbook">
      <div>
        <h1>Vieraskirja</h1>
      </div>
      <div className="nimimerkki">
        <input
          type="text"
          value={nickname}
          placeholder="nimimerkki"
          onChange={handleNameChange}
        />
      </div>
      <textarea
        value={message}
        className="tekstikenttä"
        placeholder="kirjoita viesti"
        onChange={handleMessageChange}
        rows={10}
      ></textarea>
      <div>
        <button
          type="submit"
          className="lähetänappi"
          onClick={handleMessageSubmit}
        >
          Lähetä
        </button>
      </div>
    </form>
  );
}
