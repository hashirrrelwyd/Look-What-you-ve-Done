import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ScrollToTop from "../utils/ScrollToTop";
import About from "../pages/About";
import Service from "../pages/Service";
import Career from "../pages/Career";
import Error404 from "../pages/Error404";
import ContactUs from "../pages/ContactUs";

export default function UserRoutes() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={ <Error404/>} />
      </Routes>
    </>
  );
}
