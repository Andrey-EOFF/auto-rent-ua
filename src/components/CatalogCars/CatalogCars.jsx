import React, { useEffect, useState } from "react";
import CardCar from "../CardCar/CardCar";
import getAllCars from "../../api/api";
import BtnLoadMore from "../Buttons/BtnLoadMore/BtnLoadMore";
import FilterCars from "../FilterCars/FilterCars";
import {
  CarItem,
  CarList,
  CardContainer,
  NoMoreCarsText,
} from "./CatalogCars.styled";
import BtnUp from "../Buttons/BtnUp/BtnUp";
import Loader from "../Loader/Loader";

export default function CatalogCars() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const carsPerPage = 8;
  const [noMoreCars, setNoMoreCars] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    make: "",
    price: 0,
    mileage: { min: 0, max: 100000 },
  });

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await getAllCars(page, carsPerPage, filters);
        const responseData = response || [];

        if (responseData.length > 0) {
          setCars((prevCars) => [...prevCars, ...responseData]);
        } else {
          setNoMoreCars(true);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCars();
  }, [page, filters]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setCars([]);
    setPage(1);
    setNoMoreCars(false);
  };

  // Фільтрація автомобілів за обраними фільтрами
  const filteredCars = cars.filter((car) => {
    const makeMatch = !filters.make || car.make === filters.make;
    const priceMatch = filters.price === 0 || car.rentalPrice <= filters.price;
    const mileageMatch =
      car.mileage >= filters.mileage.min && car.mileage <= filters.mileage.max;

    return makeMatch && priceMatch && mileageMatch;
  });

  return (
    <>
      <FilterCars onFilter={handleFilter} />
      {isLoading ? (
        <Loader />
      ) : (
        <CardContainer>
          <CarList>
            {filteredCars.map((car) => (
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
          <BtnUp />
        </CardContainer>
      )}
    </>
  );
}
