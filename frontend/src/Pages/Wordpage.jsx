import Wordlist from "../Components/Wordlist";
import "./Wordpage.css";
import { words } from "../words";

export default function Words() {
  return (
    <div className="words">
      {words.map((word) => (
        <Wordlist key={word.word} words={word} />
      ))}
    </div>
  );
}
