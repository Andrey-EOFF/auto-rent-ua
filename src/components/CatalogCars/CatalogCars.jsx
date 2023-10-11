import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCars,
  setPage,
  setNoMoreCars,
  setIsLoading,
  setFilters,
} from "../../redux/catalog/catalogSlice";
import getAllCars from "../../api/api";
import CardCar from "../CardCar/CardCar";
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
  const dispatch = useDispatch();

  const { cars, page, noMoreCars, isLoading, filters } = useSelector(
    (state) => state.catalog
  );
  const carsPerPage = 8;

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await getAllCars(page, carsPerPage, filters);
        const responseData = response || [];

        if (responseData.length > 0) {
          dispatch(setCars(responseData));
        } else {
          dispatch(setNoMoreCars(true));
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    loadCars();
  }, [page, filters, dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const handleFilter = (newFilters) => {
    dispatch(setFilters(newFilters));
    dispatch(setCars([]));
    dispatch(setPage(1));
    dispatch(setNoMoreCars(false));
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
