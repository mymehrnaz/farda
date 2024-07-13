import React from "react";

export default function Temperaturey(props){
    return(
        <div className="Temperaturey">
            <span className="temperature">{Math.round(props.cesius)}</span>
            <span className="unit">°C</span>
        </div>
    );
}