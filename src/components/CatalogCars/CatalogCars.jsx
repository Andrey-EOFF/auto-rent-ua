import React, { useEffect, useState } from "react";

import CardCar from "../CardCar/CardCar";
import getAllCars from "../../api/api";

export default function CatalogCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id}>
            <CardCar car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
