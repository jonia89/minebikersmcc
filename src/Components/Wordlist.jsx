export default function Wordlist(props) {
  return (
    <div className="wordexplanation">
      <h3>{props.words.word}:</h3>
      <p> {props.words.explanation}</p>
    </div>
  );
}
