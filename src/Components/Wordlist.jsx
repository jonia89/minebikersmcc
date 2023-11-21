import "./Wordlist.css";

export default function Wordlist(props) {
  return (
    <div className="word">
      <h3>{props.words.word}:</h3>
      <p> {props.words.explanation}</p>
    </div>
  );
}
