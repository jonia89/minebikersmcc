import { useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";
import "./Imagecarousel.css";

export default function Imagecarousel({ images, texts }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

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
  /*const handleClick = (image, text) => {
    setCurrentImage(image);
    setCurrentText(text);
  };*/

  return (
    <div className="carousel">
      <img
        key={currentImage}
        src={images[currentImage]}
        alt={currentImage}
        width={800}
        height={600}
      />
      <p className="p-carousel">{texts[currentText]}</p>
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
        <div className="indicator">
          {images.map((_, image) => (
            <div
              key={image}
              className={`dot ${currentImage === image ? "active" : ""}`}
              //onClick={() => handleClick(image)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
