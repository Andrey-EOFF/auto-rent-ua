import React, { useState, useEffect } from "react";
import CardCar from "../CardCar/CardCar";
import { CarItem, CarList, CardContainer, StyledNavLink, TextTime } from "./FavoritesCars.styled";
import BtnUp from "../Buttons/BtnUp/BtnUp";
import Loader from "../Loader/Loader";
import { useFavorites } from "../../services/favoritesService";

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
  }, [isLoading]);

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
                    onRemoveFromFavorites={() => useFavorites.removeFromFavorites(car)}
                  />
                </CarItem>
              ))}
            </CarList>
          ) : (
            <TextTime>
        Час обрати своє авто
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      </TextTime>
          )}
          <BtnUp />
        </>
      )}
    </CardContainer>
  );
}
