import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import pdfRed from "../assets/pdfRed.png";

export default function WorkDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const work = location.state?.work;

  if (!work) {
    // Fallback if page is refreshed and state is lost
    return (
      <div className="text-center mt-10 text-red-500">
        Work data not available.
        <br />
        <button
          onClick={() => navigate("/work")}
          className="mt-4 underline text-pink-300"
        >
          Go back to work list
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="md:w-1/2 md:ml-20 md:mr-20 mb-5">
          <div className="flex flex-row items-center justify-between mb-6 ">
            <h1 className="text-center text-5xl font-bold text-red-500 digestive">
              {work.title.toUpperCase()}
            </h1>
            <div className="flex flex-row space-x-2">
              {work.pdf !== null &&
                work.pdf.map((pdf) => (
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <img src={pdfRed} alt="Open PDF" className="w-6 h-6" />
                  </a>
                ))}
            </div>
          </div>

          <p
            className="whitespace-pre-line leading-7 text-sm font-light text-red-500 text-justify"
            dangerouslySetInnerHTML={{ __html: work.description }}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center space-y-6 ">
          <figure className="mb-6">
            <Carousel work={work} />
            {work.photographer === null ? null : (
              <figcaption className="text-[8px] text-red-500 mt-2 text-center">
                Photographer: {work.photographer || "Unknown"}
              </figcaption>
            )}
          </figure>

          {console.log(work.videoAlbum)}
          {work.videoAlbum.map((videoUrl, index) => (
            <div className="w-full md:w-2/3 aspect-video mt-4" key={index}>
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
