import { useState } from "react";
import axios from "axios";
import "./Guestbook.css";
import { addUser } from "./addUser";
import { addMessage } from "./addMessage";
import { getUserId } from "./getUserId";
import { deleteUser } from "./deleteUser";

export default function GuestbookForm(props) {
  const [post, setPost] = useState("");
  const [userIpAddress, setUserIpAddress] = useState("");
  const [tempName, setTempName] = useState(props.nickname);
  const [modifyUser, setModifyUser] = useState(false);
  
  const getIpAddress = async () => {
    try {
      const result = await axios.get("https://geolocation-db.com/json/");
      setUserIpAddress(result.data.IPv4);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    setModifyUser(true);
  };

  const handleSaveUpdatedUser = async (event) => {
    event.preventDefault();
    if (tempName.trim().length < 1) {
      alert("Liian lyhyt nimimerkki");
      return;
    }
    try {
      const userExists = await getUserId(tempName);
      if (userExists) {
        alert("Nimimerkki on jo käytössä");
        return;
      }

      const response = await fetch(
        `https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/user/${props.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nimi: tempName }),
        }
      );
      if (response.ok) {
        const updatedUser = await response.json();
        props.setNickname(updatedUser.nimi);
        localStorage.setItem("minebikers_nickname", updatedUser.nimi);
        setModifyUser(false);
        props.refreshPosts();
      } else {
        alert("Käyttäjänimen päivitys epäonnistui!");
      }
    } catch (error) {
      console.error(error);
      alert("Käyttäjänimen päivitys epäonnistui!");
    }
  };

  const handleNameChange = (event) => {
    props.setNickname(event.target.value);
    setTempName(event.target.value);
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
              await addMessage(userId, post, props.linkedPostId);
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
          await addMessage(props.userId, post, props.linkedPostId);
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
    <form className="guestbook" style={{ backgroundColor: "black" }}>
      {props.userId && props.nickname ? (
        <div>
          {modifyUser ? (
            <div>
              <input
                type="text"
                defaultValue={props.nickname}
                onChange={handleNameChange}
              />
              <button onClick={handleSaveUpdatedUser}>Tallenna</button>
              <button type="button" onClick={() => setModifyUser(false)}>
                Peruuta
              </button>
            </div>
          ) : (
            <h1>{props.nickname}</h1>
          )}

          <div>
            <button onClick={handleDeleteUser}>Poista käyttäjä</button>
            <button onClick={handleUpdateUser}>Muokkaa käyttäjänimeä</button>
          </div>
        </div>
      ) : (
        <div className="nimimerkki">
          <input
            type="text"
            defaultValue={props.nickname}
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
      />
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
