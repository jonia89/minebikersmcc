import { useState } from "react";
import axios from "axios";
import "./Guestbook.css";

export default function GuestbookForm(props) {
  const [post, setPost] = useState("");
  const [userIpAddress, setUserIpAddress] = useState("");

  const getIpAddress = async () => {
    try {
      const result = await axios.get("https://geolocation-db.com/json/");
      setUserIpAddress(result.data.IPv4);
    } catch (error) {
      console.error(error);
    }
  };

  //Funktiot
  const addUser = async (nickname, ipAddress) => {
    try {
      const response = await fetch("http://localhost:8080/vieraskirja/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi: nickname,
          ip_osoite: ipAddress,
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
      return null;
    }
  };

  const getUserName = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/${userId}`,
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
      return user.nimi;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/user/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      const result = await response.json();
      console.log(result.message);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateUser = async (userId, nickname) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nimi: nickname,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      const result = await response.json();
      console.log(result.message);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  //////////////////////////////////////////

  const handleDeleteUser = () => {
    const confirmation = window.confirm("Haluatko varmasti poistaa käyttäjän?");
    if (confirmation) {
      deleteUser(props.userId);
      props.setUserId(null);
      props.setNickname("");
      localStorage.removeItem("minebikers_userId");
      localStorage.removeItem("minebikers_nickname");
      props.refreshPosts();
    }
  };

  const handleUpdateUser = () => {
    const newNickname = prompt("Anna uusi nimimerkki:");
    if (newNickname) {
      const confirmation = window.confirm(
        "Haluatko varmasti muuttaa käyttäjänimettä?"
      );
      if (confirmation) {
        updateUser(props.userId, newNickname);
        props.setNickname(newNickname);
        localStorage.setItem("minebikers_nickname", newNickname);
        props.refreshPosts();
      }
    }
  };

  const handleNameChange = (event) => {
    props.setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setPost(event.target.value);
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    if (props.nickname.length > 0 && post.length > 0) {
      try {
        const userIp = userIpAddress || (await getIpAddress());
        // EI käyttäjä IDtä lokaalisti
        if (!props.userId) {
          // Tarkistetaan onko nimimerkki jo kannassa
          const userExists = await getUserId(props.nickname);
          // Käyttäjänimeä ei ole vielä kannassa
          if (!userExists) {
            const userId = await addUser(props.nickname, userIp);
            if (userId) {
              props.setUserId(userId);
              props.setNickname(props.nickname);
              localStorage.setItem("minebikers_userId", userId);
              localStorage.setItem("minebikers_nickname", props.nickname);
              await addMessage(userId, post);
              setPost("");
              props.refreshPosts();
            }
          }
          // Käyttäjänimi on jo kannassa
          else {
            // Jostain syystä ei lokaalisti mutta IP täsmää
            // user.IP === getUserIp()
            // IP ei täsmää, EI oikeutta
            alert("Nimimerkki on jo käytössä");
          }

          // Käyttäjä ID jo lokaalisti
        } else {
          await addMessage(props.userId, post);
          setPost("");
          props.refreshPosts();
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
      {props.userId && props.nickname ? (
        <div>
          <h2>{props.nickname}</h2>
          <div>
            <button onClick={handleDeleteUser}>Poista käyttäjä</button>
            <button onClick={handleUpdateUser}>Muokkaa käyttäjänimeä</button>
          </div>
        </div>
      ) : (
        <div className="nimimerkki">
          <input
            type="text"
            value={props.nickname}
            placeholder="nimimerkki"
            onChange={handleNameChange}
          />
        </div>
      )}

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
