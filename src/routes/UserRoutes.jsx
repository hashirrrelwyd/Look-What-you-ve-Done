import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ScrollToTop from "../utils/ScrollToTop";
import About from "../pages/About";
import Service from "../pages/Service";
import Career from "../pages/Career";

export default function UserRoutes() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
    </>
  );
}
