import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/mymehrnaz/"
            target="_blank"
            rel=" noreferrer"
          >
            Mehrnaz Sadeghian
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mymehrnaz/farda"
            target="_blank"
            rel=" noreferrer"
          >
             on GitHub
          </a>{" "}
          and is on{" "}
          <a
            href="https://netlify.app/"
            target="_blank"
            rel=" noreferrer"
          >
             Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
