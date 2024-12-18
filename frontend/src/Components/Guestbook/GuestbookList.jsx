import "./Guestbook.css";

export default function GuestbookList(props) {
  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/post/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete message");
      }
      const result = await response.json();
      console.log(result.message);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
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

  return (
    <div>
      {props.messages.length === 0 ? (
        <div>
          <h1 style={{ color: "gray", background: "black" }}>Ei viestejä</h1>
        </div>
      ) : (
        props.messages.map((message) => (
          <div key={message.id}>
            <div>
              {" "}
              <h2> {message.nimi}</h2>
            </div>
            <div>
              <h3>{message.viesti}</h3>{" "}
              <button onClick={() => handleDelete(message.id)}>Poista</button>
              <p style={{ color: "gray" }}>Lähetetty: {message.aika}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
