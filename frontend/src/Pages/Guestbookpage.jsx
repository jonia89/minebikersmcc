import { useState, useEffect } from "react";
import { getUserName } from "../Components/Guestbook/getUserName";
import GuestbookForm from "../Components/Guestbook/GuestbookForm";
import GuestbookList from "../Components/Guestbook/GuestbookList";

export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [nickname, setNickname] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [linkedPostId, setLinkedPostId] = useState(null);

  useEffect(() => {
    const savedUserId = localStorage.getItem("minebikers_userId");
    const savedUserName = localStorage.getItem("minebikers_nickname");

    if (savedUserId) {
      setUserId(savedUserId);
      setNickname(savedUserName);
    }

    if (savedUserName) {
      setNickname(savedUserName);
    }

    if (savedUserId && savedUserName) {
      checkStatus(savedUserId);
    }

    getPosts();
  }, []);

  const saveUserId = (id) => {
    localStorage.setItem("minebikers_userId", id);
    setUserId(id);
  };

  const saveUserName = (name) => {
    localStorage.setItem("minebikers_nickname", name);
    setNickname(name);
  };

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 404) {
        return;
      }
      if (!response.ok) {
        throw new Error("Virhe viestien haussa");
      }
      const posts = await response.json();
      setMessages(posts);
    } catch (error) {
      console.log(error);
      alert(
        "Virhe viestien haussa, koita hetken päästä uudelleen päivittämällä sivu."
      );
    }
  };

const checkStatus = async (userId) => {
  const data = await getUserName(userId);
  if (data.member && nickname === data.nimi) {
    setIsMember(true);
  } 
}

  return (
    <div className="guestbook">
      <GuestbookForm
        refreshPosts={() => getPosts()}
        userId={userId}
        setUserId={setUserId}
        nickname={nickname}
        setNickname={setNickname}
        saveUserId={saveUserId}
        saveUserName={saveUserName}
        linkedPostId={linkedPostId}
      />
      <GuestbookList
        nickname={nickname}
        setNickname={setNickname}
        messages={messages}
        setMessages={setMessages}
        userId={userId}
        setUserId={setUserId}
        refreshPosts={() => getPosts()}
        isMember={isMember}
        saveUserId={saveUserId}
        saveUserName={saveUserName}
        setIsComment={setIsComment}
        setLinkedPostId={setLinkedPostId}
      />
    </div>
  );
}
