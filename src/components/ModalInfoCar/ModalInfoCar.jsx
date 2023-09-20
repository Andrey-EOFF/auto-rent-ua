// ModuleInfoCar.jsx
import React from "react";
import {
  ModalContent,
  CloseButton,
  ModalContainer,
  CarImg,
  CardHeader,
  CardModal,
  CarInfo,
  CarInfoDesc,
  CarTitleFunctional,
  CarConditions,
  CarConditionsItem,
  CardItemSpan,
} from "./ModalInfoCar.styled";

export default function ModalInfoCar({ car, toggleModal }) {
  return (
    <>
      <ModalContainer>
        <ModalContent>
          <CarImg src={car.img} alt={`${car.make} ${car.model}`}></CarImg>
          <CardHeader>
            <div>
              {car.make} <CardModal>{car.model}</CardModal>
              {","} {car.year}
            </div>
          </CardHeader>

          <CarInfo>
            <span>{car.address.split(",")[1]}</span>
            <span>{car.address.split(",")[2]}</span>
            <span> id: {car.id}</span>
            <span> Year: {car.year}</span>
            <span> Type: {car.type}</span>
            <span> FuelConsumption: {car.fuelConsumption}</span>
            <span> EngineSize: {car.engineSize}</span>
          </CarInfo>
          <CarInfoDesc>{car.description}</CarInfoDesc>
          <CarTitleFunctional>
            Accessories and functionalities:
          </CarTitleFunctional>
          <CarInfo>
            <span>
              {car.accessories.map((accessory, index) => (
                <span key={index}>
                  {accessory}
                  {index !== car.accessories.length}
                </span>
              ))}
            </span>
            <span>
              {car.functionalities.map((functionality, index) => (
                <span key={index}>
                  {functionality}
                  {index !== car.functionalities.length}
                </span>
              ))}
            </span>
          </CarInfo>
          <CarTitleFunctional>Rental Conditions:</CarTitleFunctional>

          <CarConditions>
            <CarConditionsItem>
              Minimum age:
              <CardItemSpan>
                {car.rentalConditions.split("\n")[0].split(": ")[1]}
              </CardItemSpan>
            </CarConditionsItem>
            <CarConditionsItem>Valid driver’s license</CarConditionsItem>
            <CarConditionsItem>Security deposit required</CarConditionsItem>
            <CarConditionsItem>
              Mileage:{" "}
              <CardItemSpan>
                {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </CardItemSpan>
            </CarConditionsItem>
            <CarConditionsItem>
              Price: <CardItemSpan>{car.rentalPrice}</CardItemSpan>
            </CarConditionsItem>
          </CarConditions>

          <CloseButton onClick={toggleModal}>x</CloseButton>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
