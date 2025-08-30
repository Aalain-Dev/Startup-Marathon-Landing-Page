import { useEffect, useState } from "react";

const ImageFader = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      key={currentIndex}
      src={images[currentIndex]}
      alt="Event Preview"
      className={`rounded-2xl h-full w-full lg:w-[800px] transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default ImageFader;
