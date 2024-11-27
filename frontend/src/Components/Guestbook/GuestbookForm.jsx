import { useState } from "react";
import "./Guestbook.css";

export default function GuestbookForm() {
  const [nickname, setNickname] = useState("");
  const [post, setPost] = useState("");

  //Funktiot
  const addUser = async () => {
    try {
      await fetch("http://localhost:8080/vieraskirja/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi: nickname,
          ip_osoite: "127.0.0.1",
          human: true,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  //
  const addMessage = async (userId) => {
    try {
      await fetch("http://localhost:8080/vieraskirja/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi_id: userId,
          viesti: post,
          aika: new Date().toISOString().slice(0, 19).replace("T", " "),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  //
  const getUserId = async (nickname) => {
    try {
      const response = await fetch(`/vieraskirja/${nickname}`);
      const user = await response.json();
      return user.id;
    } catch (error) {
      console.error(error);
    }
  };
  //////////////////////////////////////////
  const handleNameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setPost(event.target.value);
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    if (nickname.length > 0 && post.length > 0) {
      try {
        await addUser(nickname);
        const userId = await getUserId(nickname);
        if (!userId) {
          console.log("käyttäjää ei löytynyt");
        }
        await addMessage();
        console.log("käyttäjä:", nickname);
        console.log(
          "viesti;",
          userId,
          post,
          new Date().toISOString().slice(0, 19).replace("T", " ")
        );
        setNickname("");
        setPost("");
      } catch (error) {
        console.error(error);
      }
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
