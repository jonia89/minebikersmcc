import "./Guestbook.css";

export default function GuestbookList(props) {
  return (
    <div>
      {props.messages.length === 0 ? (
        <div><h1 style={{color: 'gray', background: 'black'}}>Ei viestejä</h1></div>
      ) : (
        props.messages.map((message) => (
          <div key={message.id}>
            <div>
              {" "}
              <h2> {message.nimi}</h2>
            </div>
            <div>
              <h3>{message.viesti}</h3>
              <p style={{color:'gray'}}>Lähetetty: {message.aika}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
