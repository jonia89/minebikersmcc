import Wordlist from "../../Components/Wordlist";
import "./MobileWordpage.css";
import { words } from "../../words";

export default function MobileWords() {
  return (
    <div className="mobile-words">
      {words.map((word) => (
        <Wordlist key={word.word} words={word} />
      ))}
    </div>
  );
}
