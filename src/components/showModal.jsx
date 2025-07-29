export default function ShowModal() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedWork) return;

      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWork, currentIndex]);

  const openModal = (work) => {
    setSelectedWork(work);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setCurrentIndex(0);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedWork.album.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedWork.album.length);
  };

  return (
    selectedWork && (
      <div
        className="fixed inset-0 bg-black/80  flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <div
          className=" flex flex-col items-center rounded overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center w-fit mb-4 px-2">
            <h2 className="text-l font-light text-pink-300">
              {selectedWork.title.toUpperCase()}
            </h2>
          </div>

          {/* Main Image Section with Arrows */}
          <div className="relative flex items-center justify-center mb-4">
            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-pink-300 hover:text-white transition"
            >
              ‹
            </button>

            {selectedWork.album[currentIndex].endsWith(".pdf") ? (
              <iframe
                src={selectedWork.album[currentIndex]}
                className="w-[80vw] h-[60vh] rounded bg-white"
                title="PDF Preview"
              />
            ) : (
              <img
                src={selectedWork.album[currentIndex]}
                alt="Current"
                className="max-h-[60vh] object-contain rounded mx-8"
                onClick={next}
              />
            )}

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-2 text-pink-300 hover:text-white transition"
            >
              ›
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex overflow-x-auto space-x-2 px-2 pb-2">
            {selectedWork.album.map((item, i) => {
              const isPdf = item.endsWith(".pdf");
              return isPdf ? (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-20 w-16 flex items-center justify-center bg-white text-pink-300 font-light text-sm rounded cursor-pointer border-2 hover:border-white ${
                    i === currentIndex
                      ? "border-pink-300"
                      : "border-transparent"
                  }`}
                >
                  PDF
                  <br />
                  {selectedWork.title}
                </div>
              ) : (
                <img
                  key={i}
                  src={item}
                  alt={`Thumb ${i}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-20 rounded cursor-pointer border-2 hover:border-white ${
                    i === currentIndex
                      ? "border-pink-300"
                      : "border-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}
