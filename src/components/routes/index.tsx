import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../../layout/mainPage";
import { AboutPage } from "../../layout/aboutPage";
const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default Routers;
