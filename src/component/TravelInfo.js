import React from "react";
import Card from "./Card";
import TravelData from "./TravelData";
export default function TravelInfo() {
  return (
    <>
      <section className="travel-info">
        {TravelData.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </section>
    </>
  );
}
