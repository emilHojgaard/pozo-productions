import { useState } from "react";
import instaWhite from "../assets/instaWhite.png";
import instaPink from "../assets/instaPink.png";
import instaRed from "../assets/instaRed.png";
import { useLocation } from "react-router-dom";

export default function NavbarSmall() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // Define styles per route
  const navStyle =
    path === "/"
      ? {
          nav: "fixed bottom-1/10 left-1/4 transform -translate-x-1/2 flex items-center justify-center space-x-20 text-red-500 bg-transparent ml-20",
          title: "font-bold text-center text-red-500",
          insta: instaWhite,
        }
      : {
          nav: "bg-white text-red-500 top-0 left-0 w-full flex items-center justify-between px-6 py-4",
          title: "font-bold text-center text-red-500",
          insta: instaRed,
        };

  return (
    <nav className={navStyle.nav}>
      <h1 className={"mb-6" + navStyle.title}>
        <a
          href="/"
          className="hover:text-pink-300 transition digestive text-5xl"
        >
          SHATTERED PIECES /{" "}
          <span className="ml-2 signpainter text-2xl font-light leading-none whitespace-nowrap">
            ESCARLETH ROMO POZO
          </span>
        </a>
      </h1>

      <div className="flex items-center space-x-4 relative">
        {/* Instagram icon */}
        <div className={path === "/" ? "hidden" : ""}>
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
        </div>

        {/* Burger menu button */}
        <button
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-current transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <ul
            className={` ${
              path === "/" ? "bottom-full mb-5 " : "top-full mt-2 "
            } absolute right-0 bg-white border border-red-500 text-red-500 rounded shadow-lg w-36 z-50 `}
          >
            <li>
              <a
                href="/work"
                className="block px-4 py-2 hover:bg-pink-300 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                work
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 hover:bg-pink-300 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                about
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-pink-300 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
