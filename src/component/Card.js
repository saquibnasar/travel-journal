import React from "react";
import location from "../image/location.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="travel--img">
          <img src={props.travelImg} alt="" />
        </div>
        <div className="travel--content">
          <div className="d-flex align-center travel--data">
            <img src={location} alt="" />
            <h3 className="travel--location">{props.location}</h3>
            <h3 className="travel--google">View on Google Maps</h3>
          </div>
          <h1 className="travel--title">{props.title}</h1>
          <h2 className="travel--date">{props.date}</h2>
          <p className="travel--para">{props.para}</p>
        </div>
      </div>
    </>
  );
}
