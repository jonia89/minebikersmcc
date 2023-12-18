import { useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";
import "./MobileImagecarousel.css";

export default function MobileImagecarousel({ images, texts }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  //const [activeImage, setActiveImage] = useState("false");

  console.log("kuvat: ", images.length, " tekstit: ", texts.length);

  const handleNext = () => {
    if (images.length === texts.length) {
      setCurrentImage((prevImage) =>
        prevImage + 1 === images.length ? 0 : prevImage + 1
      );
      setCurrentText((prevText) =>
        prevText + 1 === texts.length ? 0 : prevText + 1
      );
    } else {
      setCurrentImage((prevImage) =>
        prevImage + 1 === images.length ? 0 : prevImage + 1
      );
      setCurrentText("");
    }
  };

  const handlePrevious = () => {
    if (images.length === texts.length) {
      setCurrentImage((prevImage) =>
        prevImage - 1 < 0 ? images.length - 1 : prevImage - 1
      );
      setCurrentText((prevText) =>
        prevText - 1 < 0 ? texts.length - 1 : prevText - 1
      );
    } else {
      setCurrentImage((prevImage) =>
        prevImage + 1 === images.length ? 0 : prevImage + 1
      );
      setCurrentText("");
    }
  };
  /*const handleDotClick = (image, text) => {
    setCurrentImage(image);
    setCurrentText(text);
  };*/

  /*const handleImageClick = () => {
    if (activeImage === "false") {
      setActiveImage("true");
      console.log(activeImage)
    } else {
      setActiveImage("false");
      console.log(activeImage)
    }
  };
  */
  return (
    <div className="mobile-carousel">
      <img
        className="mobile-image-resize"
        key={currentImage}
        src={images[currentImage]}
        alt={currentImage}
      />
      <p className="mobile-p-carousel">{texts[currentText]}</p>
      <div className="mobile-slide_direction">
        <div className="mobile-left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="mobile-right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
        <div className="mobile-indicator">
          {images.map((_, image) => (
            <div
              key={image}
              className={`mobile-dot ${currentImage === image ? "active" : ""}`}
              //onClick={() => handleDotClick(image)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
