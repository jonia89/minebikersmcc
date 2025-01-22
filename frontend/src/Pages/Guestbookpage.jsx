import { useState, useEffect } from "react";
import GuestbookForm from "../Components/Guestbook/GuestbookForm";
import GuestbookList from "../Components/Guestbook/GuestbookList";

export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const savedUserId = localStorage.getItem("minebikers_userId");
    const savedUserName = localStorage.getItem("minebikers_nickname");
    if (savedUserId) {
      setUserId(savedUserId);
      setNickname(savedUserName);
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
      const response = await fetch("http://localhost:8080/vieraskirja");
      const posts = await response.json();
      setMessages(posts);
    } catch (error) {
      console.error(error);
    }
  };

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
      />
      <GuestbookList
        messages={messages}
        setMessages={setMessages}
        userId={userId}
      />
    </div>
  );
}
