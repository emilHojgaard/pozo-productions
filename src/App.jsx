import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Work from "./pages/workpage";
import NavbarBig from "./components/NavbarBig";
import About from "./pages/aboutpage";
import Contact from "./pages/contactpage";
import WorkDetails from "./pages/detailsPage";
import NavbarSmall from "./components/NavbarSmall";

export default function App() {
  const basename =
    process.env.NODE_ENV === "production" ? "/pozo-productions" : "/";

  return (
    <BrowserRouter basename={basename}>
      <div className=" ">
        <div className="block lg:hidden">
          <NavbarSmall />
        </div>
        <div className="hidden lg:block">
          <NavbarBig />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
