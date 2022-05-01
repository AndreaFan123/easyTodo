import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
          {/* Add login condition to check if user is login or not */}
          <Route exact="true" path="/" element={<HomePage />} />
          {/* <Route path="/" element={user? <HomePage /> : <Navigate to="/login" replace/>}/> */}

          <Route path="/lists" element={<ListPage />} />
          {/* <Route path="/lists" element={!user? <LoginPage /> : <Navigate to="/" replace/>}/> */}

          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/lists" element={!user? <LoginPage /> : <Navigate to="/" replace/>}/> */}

          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/signup" element={!user? <SignupPage /> : <Navigate to="/" replace/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
