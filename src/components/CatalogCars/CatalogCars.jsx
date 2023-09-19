import React, { useEffect, useState } from "react";
import CardCar from "../CardCar/CardCar";
import getAllCars from "../../api/api";
import BtnLoadMore from "../Buttons/BtnLoadMore/BtnLoadMore";

export default function CatalogCars() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const carsPerPage = 8;

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await getAllCars(page, carsPerPage);
        const responseData = response || [];

        if (responseData.length > 0) {
          setCars((prevCars) => [...prevCars, ...responseData]);
        } else {
          console.log("No more data to load");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id}>
            <CardCar car={car} />
          </li>
        ))}
      </ul>
      <BtnLoadMore onLoadMore={handleLoadMore} />
    </div>
  );
}
