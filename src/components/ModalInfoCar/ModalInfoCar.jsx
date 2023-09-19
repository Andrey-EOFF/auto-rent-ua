// ModuleInfoCar.jsx
import React, { useState } from "react";
import {

  ModalContent,
  CloseButton,
} from "./ModalInfoCar.styled";

export default function ModalInfoCar({ car, toggleModal }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  

  return (
    <>
      <ModalContent>
 
        <h2>Car Details</h2>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <CloseButton onClick={toggleModal}>Close</CloseButton>
      </ModalContent>
    </>
  );
}
