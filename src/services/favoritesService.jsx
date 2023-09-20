
import { useEffect, useState } from "react";

export const useFavorites = (car) => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isAlreadyAdded = favorites.some((favorite) => favorite.id === car.id);
      setIsFavorite(isAlreadyAdded);
    }, [car.id]);
  
    const addToFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!isFavorite) {
        const updatedFavorites = [...favorites, car];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(true);
      }
    };
  
    const removeFromFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== car.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    };
  
    return { isFavorite, addToFavorites, removeFromFavorites };
  };
  