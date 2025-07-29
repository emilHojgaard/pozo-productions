import instaWhite from "../assets/instaWhite.png";
import instaPink from "../assets/instaPink.png";
import instaRed from "../assets/instaRed.png";
import { useLocation } from "react-router-dom";

export default function NavbarBig() {
  const location = useLocation();
  const path = location.pathname;

  // Define styles per route
  const navStyle =
    path === "/"
      ? {
          nav: "fixed top-1/10 left-1/5 transform -translate-x-1/2 flex flex-col  justify-center space-x-20 text-red-500 bg-transparent ml-20",
          title: "text-center text-red-500",
          insta: null,
        }
      : {
          nav: "bg-white text-red-500 top-0 left-0 w-full flex items-center justify-between px-6 py-4",
          title: "text-center text-red-500",
          insta: instaRed,
        };

  return (
    <nav className={navStyle.nav}>
      <h1 className={" mb-6" + navStyle.title}>
        <a
          href="/"
          className="hover:text-pink-300 transition text-6xl digestive"
        >
          SHATTERED PIECES /{" "}
          <span className="signpainter text-3xl text-light">
            ESCARLETH ROMO POZO
          </span>
        </a>
      </h1>
      <ul
        className={
          "signpainter text-lg   flex space-x-8 " +
          (path === "/" ? "flex-col font-bold" : "flex-row text-sm")
        }
      >
        <li>
          <a href="/work" className="hover:text-pink-300  transition">
            W O R K S
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-pink-300  transition">
            A B O U T
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-pink-300  transition">
            C O N T A C T
          </a>
        </li>
        <li className={path === "/" ? "hidden" : ""}>
          <a
            href="https://www.instagram.com/daniescarleth/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 relative group"
          >
            <img
              src={navStyle.insta}
              alt="Instagram"
              className="w-full h-full absolute top-0 left-0 group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src={instaPink}
              alt="Instagram Hover"
              className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
