import React, { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import {
  CarDetails,
  CarImage,
  CarInfo,
  CardContainer,
  CardHeader,
  CardModal,
  FavoriteButton,
  PlaceholderImage,
} from "./CardCar.styled";
import BtnLearnMore from "../Buttons/BtnLearnMore/BtnLearnMore";
import Modal from "../Modal/Modal";
import ModalInfoCar from "../ModalInfoCar/ModalInfoCar";

export default function CardCar({ car }) {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <CardContainer>
      <div>
        {!imageError ? (
          <CarImage
            src={car.img}
            alt={`${car.make} ${car.model}`}
            onError={handleImageError}
          />
        ) : (
          <PlaceholderImage
            src="https://funart.top/uploads/posts/2019-10/thumbs/1570459049_mashiny-buduschego-3.jpg"
            alt={`${car.make} ${car.model}`}
          />
        )}
        <FavoriteButton
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
        </FavoriteButton>
        <CarDetails>
          <CardHeader>
            <div>
              {car.make} <CardModal>{car.model}</CardModal>
              {","} {car.year}
            </div>
            <span>{car.rentalPrice}</span>
          </CardHeader>

          <CarInfo>
            <span>{car.address.split(",")[1]}</span>
            <span>{car.address.split(",")[2]}</span>
            <span> {car.rentalCompany}</span>
            <span> {car.type}</span>
            <span> {car.id}</span>
            <span>{car.accessories[0]}</span>
          </CarInfo>
        </CarDetails>
      </div>
      <BtnLearnMore toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalInfoCar car={car} toggleModal={toggleModal} />
        </Modal>
      )}
    </CardContainer>
  );
}
