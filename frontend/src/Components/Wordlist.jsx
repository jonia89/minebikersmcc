import "./Wordlist.css";

export default function Wordlist(props) {
  return (
    <div className="word">
      <h2>{props.words.word}:</h2>
      <p> {props.words.explanation}</p>
    </div>
  );
}
