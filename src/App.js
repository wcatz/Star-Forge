import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { GalleryPage } from "./pages/Gallery";



export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
    </>
  );
}
