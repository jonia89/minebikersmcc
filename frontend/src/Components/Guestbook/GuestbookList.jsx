import { useState } from "react";
import "./Guestbook.css";
import GuestbookForm from "./GuestbookForm";
import { deletePost } from "./deletePost";

export default function GuestbookList(props) {
  const [writeComment, setWriteComment] = useState(false);
  const [modifyPost, setModifyPost] = useState(false);
  const [tempMessage, setTempMessage] = useState("");

  const handleDelete = async (postId) => {
    const id = parseInt(postId);
    if (isNaN(id)) {
      console.error("Invalid post ID:", postId);
      return;
    }
    const isDeleted = await deletePost(id);
    if (isDeleted) {
      props.setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== postId)
      );
    }
  };

  const handleModify = async (postId, initialMessage) => {
    setModifyPost((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
    setTempMessage(initialMessage);
  };

  const handleSaveModify = async (postId, updatedMessage) => {
    if (!updatedMessage || updatedMessage.trim() === "") {
      alert("Viesti ei voi olla tyhjä");
      console.error("Updated message is empty!");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/messages/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ viesti: updatedMessage }),
        }
      );
      setModifyPost((prevState) => ({
        ...prevState,
        [postId]: false,
      }));
      if (!response.ok) {
        console.error("Error updating the message:", response.statusText);
        return;
      }

      props.setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === postId
            ? { ...message, viesti: updatedMessage }
            : message
        )
      );
    } catch (error) {
      console.error("Error updating the message:", error);
    }
  };


  const handleCloseComment = async (postId) => {
    setWriteComment((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div style={{ marginTop: "7%", marginBottom: "25%" }}>
      {props.messages.length === 0 ? (
        <div>
          <h1 style={{ color: "gray", background: "black" }}>Ei viestejä</h1>
        </div>
      ) : (
        props.messages.map((message) => (
          <div className="viesti" key={message.id}>
            <div>
              {" "}
              <h2> {message.nimi}</h2>
            </div>
            <div>
              {!modifyPost[message.id] ? (
                <h3>
                  {message.id}: {message.viesti}
                </h3>
              ) : (
                <div>
                  <textarea
                    rows={10}
                    defaultValue={message.viesti}
                    onChange={(e) => setTempMessage(e.target.value)}
                  />
                  <button
                    onClick={() => handleSaveModify(message.id, tempMessage)}
                  >
                    Tallenna
                  </button>
                  <button onClick={() => handleModify(message.id)}>
                    Cancel
                  </button>
                </div>
              )}

              {+message.nimi_id === +props.userId && !modifyPost[message.id] ? (
                <div>
                  <button onClick={() => handleDelete(message.id)}>
                    Poista
                  </button>
                  <button onClick={() => handleModify(message.id)}>
                    Muokkaa
                  </button>
                </div>
              ) : (
                ""
              )}
              <p style={{ color: "gray" }}>Lähetetty: {message.aika}</p>
            </div>

            {!writeComment[message.id] ? (
              <div>
                <button onClick={() => handleCloseComment(message.id)}>
                  Kommentoi
                </button>
                <button>Kommentit</button>
              </div>
            ) : (
              <div>
                <GuestbookForm
                  refreshPosts={props.refreshPosts}
                  userId={props.userId}
                  setUserId={props.setUserId}
                  nickname={props.nickname}
                  setNickname={props.setNickname}
                  saveUserId={props.saveUserId}
                  saveUserName={props.saveUserName}
                />
                <button onClick={() => handleCloseComment(message.id)}>
                  Sulje
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
