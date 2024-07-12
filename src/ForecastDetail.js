import React from "react";
import ForecastFutur from "./ForecastFutur";
import axios from "axios";
import "./App.css";

export default function ForecastDetail(){
    return(
        <div>
        <div className="detail">
        <div> Friday:00:49</div>
        <div>Clear sky</div>
        <div>Humidity:33%</div>
        <div>Wind:3.14km/h</div>
      </div>
      <div class="tem">
       <h2>28°C<span>🌑</span></h2> 
      </div>
    
      <ForecastFutur/>
      </div>
    );
}