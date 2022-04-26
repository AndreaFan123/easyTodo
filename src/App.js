import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

import { GlobalStyles } from "./global-styles/Global.styled";
import Navbar from "./components/Navbar";
import { WrapperStyle } from "./styles/Wrapper.styled";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <WrapperStyle>
        <GlobalStyles />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/lists" element={<ListPage />} />
        </Routes>
      </WrapperStyle>
      <Footer />
    </BrowserRouter>
  );
}
