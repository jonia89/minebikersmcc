import CommentForm from "../Components/Guestbook/CommentForm";
import CommentList from "../Components/Guestbook/CommentList";
import './Guestbook.css'

export default function Guestbook() {
  return (
    <div className="guestbook">
      <CommentForm />
      <CommentList />
    </div>
  );
}
