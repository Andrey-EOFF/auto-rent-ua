import React, { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";

export default function CardCar({ car }) {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyAdded = favorites.some((favorite) => favorite.id === car.id);
    setIsFavorite(isAlreadyAdded);
  }, [car.id]);

  const handleImageError = () => {
    setImageError(true);
  };

  const addToFavorites = (car) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyAdded = favorites.some((favorite) => favorite.id === car.id);

    if (!isAlreadyAdded) {
      const updatedFavorites = [...favorites, car];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  const removeFromFavorites = (car) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== car.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  };

  return (
    <div className="car-card">
      <button
        type="button"
        onClick={() => {
          if (isFavorite) {
            removeFromFavorites(car);
          } else {
            addToFavorites(car);
          }
        }}
      >
        <BiHeart />
      </button>
      {!imageError ? (
        <img
          src={car.img}
          alt={`${car.make} ${car.model}`}
          onError={handleImageError}
          width={400}
        />
      ) : (
        <img
          src="https://funart.top/uploads/posts/2019-10/thumbs/1570459049_mashiny-buduschego-3.jpg"
          alt={`${car.make} ${car.model}`}
          width={400}
          className="placeholder-image"
        />
      )}
      <div className="car-details">
        <h2>
          {car.make} {car.model}
        </h2>
        {car.year && <p>Year: {car.year}</p>}
        {car.rentalPrice && <p>Rental Price: {car.rentalPrice}</p>}
        {car.address && (
          <div>
            <p>Address: {car.address}</p>
            {car.city && <p>City: {car.city}</p>}
            {car.country && <p>Country: {car.country}</p>}
          </div>
        )}
        {car.rentalCompany && <p>Rental Company: {car.rentalCompany}</p>}
        {car.type && <p>Type: {car.type}</p>}
        {car.id && <p>ID: {car.id}</p>}
        {car.accessories && car.accessories.length > 0 && (
          <p>Accessories: {car.accessories.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
