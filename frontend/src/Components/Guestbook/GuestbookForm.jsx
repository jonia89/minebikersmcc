import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Guestbook.css";

export default function GuestbookForm() {
  const [nickname, setNickname] = useState("");
  const [post, setPost] = useState("");

  const handleNameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setPost(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (nickname.length > 0 && post.length > 0) {
      const postId = uuid();
      const userId = uuid();
      const addMessage = async () => {
        try {
          const response = await fetch("http://localhost:8080/vieraskirja", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
        } catch (error) {
          console.error(error);
        }
      };
      addMessage();
      setNickname("");
      setPost("");
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
        value={post}
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
