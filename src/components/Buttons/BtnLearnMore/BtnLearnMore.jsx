import React from "react";
import { BtnStyle } from "./BtnLearnMore.styled";

export default function BtnLearnMore({ toggleModal }) {
  return (
    <>
      <BtnStyle type="button" onClick={toggleModal}>
        Learn More
      </BtnStyle>
    </>
  );
}
