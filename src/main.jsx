import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Details from "./pages/Details.jsx";
import 'D:/react-workshop/student/src/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/student-record" element={<App />}></Route>
        <Route path="/student-record/details" element={<Details />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
