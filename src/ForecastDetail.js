 import React from "react";
 import ForecastDate from "./ForecastDate";
 import Icon from "./Icon";
 import Temperaturey from "./Temperaturey";

 export default function ForecastDetail(props){
  return(
    <div className="ForecastDetail">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <ForecastDate date={props.data.date}/>
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <Icon code={props.data.icon} size={52}/>
            </div>
            <div>
              <Temperaturey celsius={props.data.temperature}/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
 }
