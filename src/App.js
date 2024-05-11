import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />

        <footer>
          <p>
            {" "}
            This project was coded by{" "}
            <a href="https://github.com/Tamarahhh">Tamara Boboye</a> and is on{" "}
            <a href="https://github.com/Tamarahhh/react-weather">Github</a> and
            hosted on{" "}
            <a href="https://chic-platypus-4abf03.netlify.app/">Netlify</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
