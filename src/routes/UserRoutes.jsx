import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ScrollToTop from "../utils/ScrollToTop";

export default function UserRoutes() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
