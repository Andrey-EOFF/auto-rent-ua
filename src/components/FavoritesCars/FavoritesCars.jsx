import React, { useState, useEffect } from "react";
import CardCar from "../CardCar/CardCar";
import { CarItem, CarList, CardContainer } from "./FavoritesCars.styled";
import BtnUp from "../Buttons/BtnUp/BtnUp";
import Loader from "../Loader/Loader";

export default function FavoritesCars() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteCars(favorites);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    loadFavorites();
  }, []);

  const removeFromFavorites = (car) => {
    const updatedFavorites = favoriteCars.filter(
      (favorite) => favorite.id !== car.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteCars(updatedFavorites);
  };

  return (
    <CardContainer>
      {isLoading ? ( 
        <Loader />
      ) : (
        <>
          {favoriteCars.length > 0 ? (
            <CarList className="car-list">
              {favoriteCars.map((car) => (
                <CarItem key={car.id}>
                  <CardCar
                    key={car.id}
                    car={car}
                    onRemoveFromFavorites={() => removeFromFavorites(car)}
                  />
                </CarItem>
              ))}
            </CarList>
          ) : (
            <p>Ви ще не обрали свої улюблені авто!</p>
          )}
          <BtnUp />
        </>
      )}
    </CardContainer>
  );
}
