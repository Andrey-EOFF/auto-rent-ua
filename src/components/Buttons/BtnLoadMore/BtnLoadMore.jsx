import React from "react";

export default function BtnLoadMore({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
}
