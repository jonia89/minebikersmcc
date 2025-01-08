import { useState, useEffect } from "react";
import GuestbookForm from "../Components/Guestbook/GuestbookForm";
import GuestbookList from "../Components/Guestbook/GuestbookList";

export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

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
      <GuestbookForm refreshPosts={() => getPosts()} userId={userId} setUserId={setUserId} />
      <GuestbookList messages={messages} setMessages={setMessages}/>
    </div>
  );
}
