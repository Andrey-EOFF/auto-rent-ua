import React from "react";
import { BtnLoadMoreStyle } from "./BtnLoadMore.styled";

export default function BtnLoadMore({ onLoadMore }) {
  return (
    <BtnLoadMoreStyle type="button" onClick={onLoadMore}>
      Load More
    </BtnLoadMoreStyle>
  );
}
