import React, { useEffect, useState } from "react";
import CardCar from "../CardCar/CardCar";
import getAllCars from "../../api/api";
import BtnLoadMore from "../Buttons/BtnLoadMore/BtnLoadMore";
import { CarItem, CarList, CardContainer, NoMoreCarsText } from "./CatalogCars.styled";

export default function CatalogCars() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const carsPerPage = 8;
  const [noMoreCars, setNoMoreCars] = useState(false);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await getAllCars(page, carsPerPage);
        const responseData = response || [];

        if (responseData.length > 0) {
          setCars((prevCars) => [...prevCars, ...responseData]);
        } else {
          
          setNoMoreCars(true); 
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
    <>
      <CardContainer>
        <CarList>
          {cars.map((car) => (
            <CarItem key={car.id}>
              <CardCar car={car} />
            </CarItem>
          ))}
        </CarList>
        {!noMoreCars ? (
          <BtnLoadMore onLoadMore={handleLoadMore} />
        ) : (
          <NoMoreCarsText>Ви передивились всі авто!</NoMoreCarsText>
        )}
      </CardContainer>
    </>
  );
}
