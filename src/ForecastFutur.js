import React from "react";
import Footer from "./Jank";
import "./App.css";
import Jank from "./Jank";

export default function ForecastFutur(){
    return(
        <div className="csgrid">
             <div className="container text-center">
  <div class="row">
    <div className="col">Sat<span>☀️</span><span>23°</span><span>17°</span></div>
    <div className="col">Sun<span>🌥</span><span>21°</span><span>10°</span></div>
    <div className="col">Mon<span>🌤</span><span >25°</span><span>31°</span></div>
    <div className="col">Tue<span>☀️</span><span >30°</span><span>36°</span></div>
  </div>
  
  </div>
  <hr/>
  <Jank/>
</div>
        
    );
}