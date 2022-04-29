import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

import { GlobalStyles } from "./styles/Global.styled";
import Navbar from "./components/Navbar";
// import { WrapperStyle } from "./styles/Wrapper.styled";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyles />
        <Navbar />

        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route path="/lists" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
