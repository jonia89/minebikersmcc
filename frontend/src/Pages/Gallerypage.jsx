import Imagecarousel from "../Components/Imagecarousel";
import { images, texts } from "../galleryItems";
import "./Gallerypage.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <Imagecarousel images={images} texts={texts} />
    </div>
  );
}
