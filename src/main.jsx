import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import "./index.css";
import DetailsProject from "./Pages/DetailsProject/DetailsProject.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/projects/details/:id" element={<DetailsProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
