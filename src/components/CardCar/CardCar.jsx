import React, { useState } from "react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import {
  CarDetails,
  CarImage,
  CarInfo,
  CardContainer,
  CardHeader,
  CardModal,
  FavoriteButton,
} from "./CardCar.styled";
import BtnLearnMore from "../Buttons/BtnLearnMore/BtnLearnMore";
import Modal from "../Modal/Modal";
import ModalInfoCar from "../ModalInfoCar/ModalInfoCar";
import imageTest from "../../images/car1.jpg";
import { useFavorites } from "../../services/favoritesService"; 

const CardCar = ({ car }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites(car);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = (e) => {
    if (e.target && e.target.src) {
      e.target.src = imageTest;
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <CardContainer>
      <div>
        <CarImage
          src={car.img}
          alt={`${car.make} ${car.model}`}
          onError={handleImageError}
        />
        <FavoriteButton
          type="button"
          onClick={() => {
            if (isFavorite) {
              removeFromFavorites();
            } else {
              addToFavorites();
            }
          }}
        >
          {isFavorite ? (
            <BiSolidHeart className="favorite-heart" />
          ) : (
            <BiHeart className="heart"/>
          )}
        </FavoriteButton>
        <CarDetails>
          <CardHeader>
            <div>
              {car.make} <CardModal>{car.model}</CardModal>
              {","} {car.year}
            </div>
            <span>${car.rentalPrice}</span>
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
};

export default CardCar;
