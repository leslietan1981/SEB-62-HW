import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <WeatherIcon src={props.img} alt={props.imgAlt} />
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherForecast;

{
  /* <div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div> */
}
