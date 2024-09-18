import { useState } from "react";
import GuestbookForm from "../Components/Guestbook/GuestbookForm";
import GuestbookList from "../Components/Guestbook/GuestbookList";

export default function Guestbook() {
const [messages, setMessages] = useState([{id: 1, nickname: "Hamppi", messageText: "Kovaa ajoa", date: "2024-09-18T14:52:45.000Z"}])

  return (
    <div className="guestbook">
      <GuestbookForm />
      <GuestbookList messages={messages}/>
    </div>
  );
}
