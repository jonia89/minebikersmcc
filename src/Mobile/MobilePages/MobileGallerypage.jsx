import MobileImagecarousel from "../MobileImagecarousel";
import { images, texts } from "../../galleryItems";
import "./MobileGallerypage.css";

export default function MobileGallery() {
  return (
    <div className="mobile-gallery">
      <MobileImagecarousel images={images} texts={texts} />
    </div>
  );
}
