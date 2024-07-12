import React from "react";
import ForecastDetail from "./ForecastDetail";
import "./App.css";

export default function Weather(){
    return(
        <div className="input-btn">
        <form className="input-btn">
        <input type="search" placeholder="Enter a city..." className="btn"/>
        <input type="submit" value="search" className="search-btn"/> 
      </form>
      <hr/>
      
     <> <h1>Tehran</h1></>
     < ForecastDetail/>
    
     
     </div>
    );}