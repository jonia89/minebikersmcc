export default function CommentForm() {
    const date = new Date().toDateString()

  return (
    <div>
      <input type="text" placeholder="Nimimerkki" />
      <input type="email" name="mail" id="" placeholder="Sähköposti"/>
      <div>
        <textarea name="comment" id="" cols="60" rows="20"></textarea>
      </div>
      <button type="submit">Lähetä</button>
    </div>
  );
}
