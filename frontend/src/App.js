import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "./Routess.js"// Import fixed
import {SignUpPage} from "./Routess.js"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={< SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
