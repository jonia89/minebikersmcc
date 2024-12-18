import { useState } from "react";
import "./Guestbook.css";

export default function GuestbookForm(props) {
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState(null);
  const [post, setPost] = useState("");

  //Funktiot
  const addUser = async (nickname) => {
    try {
      const response = await fetch("http://localhost:8080/vieraskirja/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi: nickname,
          ip_osoite: "0.0.0.0.0",
          ihminen: true,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const data = await response.json();
      return data.nimi_id;
    } catch (error) {
      console.error(error);
    }
  };
  //
  const addMessage = async (userId, message) => {
    try {
      await fetch("http://localhost:8080/vieraskirja/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi_id: userId,
          viesti: message,
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
      const response = await fetch(
        `http://localhost:8080/vieraskirja/${nickname}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user ID");
      }
      const user = await response.json();
      if (!user) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return user.nimi_id;
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
        let currentUserId = userId;
        if (!currentUserId) {
          const existingUserId = await getUserId(nickname);
          if (existingUserId) {
            currentUserId = existingUserId;
          } else {
            currentUserId = await addUser(nickname);
          }
          setUserId(currentUserId);
        }
        await addMessage(currentUserId, post);
        setNickname("");
        setPost("");
        if (props.refreshMessages) {
          props.refreshMessages();
        }
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
