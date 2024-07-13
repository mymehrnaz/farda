import React,{ useState } from "react";
import ForecastDetail from "./ForecastDetail";
import ForecastDate from "./ForecastDate";
import axios from "axios";
import "./App.css";

export default function Weather(props){
   const[weatherData, setWeatherData] = useState({ready:false});
   const[city, setCity]= useState(props.defaultCity);

   function handleResponse(response){
    setWeatherData({
      ready:true,
      coordinates:response.data.coordinates,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date:new Date(response.data.dt * 1000),
      description:response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      wind:response.data.wind.speed,
      city:response.data.name,
    });
   }
   function handleSubmit(event){
    event.preventDefault();
    search();
   }
   function handleCityChange(event){
    setCity(event.target.value);
   }
   function search(){
    const apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   }
   if (weatherData.ready){
    return(
  <div className="Weather">
    
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
            
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
    <ForecastDetail data={weatherData}/>
    <ForecastDate coordinates={weatherData.coordinates} city={weatherData.city}/>
  </div>
    );
  }else{
    search();
    return "Loading...";
  }}