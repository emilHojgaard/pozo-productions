import { useState, useEffect } from "react";
import laMalaPozo from "../assets/laMalaPozo.jpg";
import yieldingFront2 from "../assets/yieldingFront2.jpg";
import tenderPoints2 from "../assets/tenderPoints1.jpg";

const images = [laMalaPozo, tenderPoints2, yieldingFront2];

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={images[currentIndex]}
        alt="Background"
        className="fixed inset-0 object-cover w-full h-full -z-10"
      />
    </>
  );
}
