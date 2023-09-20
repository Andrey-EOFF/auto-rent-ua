import React from "react";
import { StyledLinkButton } from "./BtnRentalCar.styled";

export default function BtnRentalCar() {
  const phoneNumber = "+380730000000";

  return (
    <StyledLinkButton href={`tel:${phoneNumber}`}>Rental Car</StyledLinkButton>
  );
}
