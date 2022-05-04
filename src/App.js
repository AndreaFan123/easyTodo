import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useContext";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { GlobalStyles } from "./styles/Global.styled";
import Navbar from "./components/Navbar";
// import { WrapperStyle } from "./styles/Wrapper.styled";

export default function App() {
  const { user, alreadyLogin } = useAuthContext();
  return (
    <div>
      {alreadyLogin && (
        <BrowserRouter>
          <GlobalStyles />
          <Navbar />
          <Routes>
            {/* 如果路徑為"/"，檢查使用者是否有登入，若有，導到首頁；若無，則導到 login 頁面 */}
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to="/login" replace />}
            />

            {/* 如果路徑為"/lists"，檢查使用者是否登入，若有，導到 lists 頁面；若無，導到 login 頁面 */}
            <Route
              path="/lists"
              element={user ? <ListPage /> : <Navigate to="/login" replace />}
            />

            {/* 如果路徑為"/login"，檢查使用者是否登入，若無，導到 login 頁面；若有，導到首頁 */}
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" replace />}
            />
            {/* 如果路徑為"/signup"，檢查使用者是否登入，若無，導到 signup 頁面；若有，導到首頁 */}
            <Route
              path="/signup"
              element={!user ? <SignupPage /> : <Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
