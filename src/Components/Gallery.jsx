export default function Gallery(props) {
  const clickHandler = (event) => {
    event.target.requestFullscreen();
  };

  return (
    <div>
      <div className="gallery">
        <img
          onClick={clickHandler}
          src={props.photos.photo}
          alt={props.photos.text}
          width={500}
          height={300}
        />
        <p>{props.photos.text}</p>
      </div>
    </div>
  );
}
