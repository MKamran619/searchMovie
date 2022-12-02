
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Movie from "./components/movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";

export default function Appmain() {
  return (
    <div>
      <Header />
    <BrowserRouter>
      <Routes>
           <Route path="/" index element={<App />} />
           <Route path="movie" element={<Movie />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Appmain />, document.getElementById("root"));
