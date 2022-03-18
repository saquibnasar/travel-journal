import React from "react";
import img from "../image/logo.png";
export default function Navbar() {
  return (
    <>
      <header>
        <div className="header--logo">
          <img src={img} alt="" />
          <h3 className="header--title">my travel journal.</h3>
        </div>
      </header>
    </>
  );
}
