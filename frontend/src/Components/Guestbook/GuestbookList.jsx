import "./Guestbook.css";

export default function GuestbookList(props) {
  return (
    <div>
      {props.messages.length === 0 ? (
        <div>Ei viestejä</div>
      ) : (
        props.messages.map((message) => (
          <div key={message.id}>
            <div>{message.nickname} {message.date}</div>
            <div>{message.messageText}</div>
          </div>
        ))
      )}
    </div>
  );
}
