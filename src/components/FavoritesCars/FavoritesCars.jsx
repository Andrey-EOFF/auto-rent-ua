import React, { useState, useEffect } from "react";
import CardCar from "../CardCar/CardCar";

export default function FavoritesCars() {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  }, [favoriteCars]);

  const removeFromFavorites = (car) => {
    const updatedFavorites = favoriteCars.filter(
      (favorite) => favorite.id !== car.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteCars(updatedFavorites);
  };

  return (
    <>
      <h1>Favorites Cars</h1>
      {favoriteCars.length > 0 ? (
        <ul className="car-list">
          {favoriteCars.map((car) => (
            <li key={car.id}>
              <CardCar car={car} onRemoveFromFavorites={removeFromFavorites} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Ви ще не обрали свої улюблені авто!</p>
      )}
    </>
  );
}
