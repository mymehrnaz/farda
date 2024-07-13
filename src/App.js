import React from "react";
import Weather from "./Weather";
import Jank from "./Jank";
import './App.css';


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
