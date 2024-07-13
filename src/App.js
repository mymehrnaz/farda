import React from "react";
import Weather from "./Weather";
import './App.css';
import Jank from "./Jank";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran"/>
        
    
        
      </div>
      <hr/>
      <Jank/>
    </div>
  );
}

export default App;
