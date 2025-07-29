import { useState } from "react";

export default function Carousel({ work }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? work.photoAlbum.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % work.photoAlbum.length);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col items-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Section with Arrows */}
        <div className="relative flex flex-col">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-pink-300 hover:text-pink-500 transition"
          >
            ‹
          </button>

          <img
            src={work.photoAlbum[currentIndex]}
            alt="Current"
            className="max-h-[60vh] object-contain rounded mx-8 cursor-zoom-in"
            onClick={openModal}
          />

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-pink-300 hover:text-pink-500 transition"
          >
            ›
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex overflow-x-auto space-x-2 px-2 pb-2 mt-2">
          {work.photoAlbum.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Thumb ${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-20 rounded cursor-pointer border-2 hover:border-white ${
                i === currentIndex ? "border-pink-300" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal Overlay for Zoomed Image */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          <img
            src={work.photoAlbum[currentIndex]}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent modal close on image click
          />
        </div>
      )}
    </>
  );
}
