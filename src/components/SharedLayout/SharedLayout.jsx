import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import FilterCars from "../../components/FilterCars/FilterCars";

export default function SharedLayout() {
  return (
    <>
      {/* <FilterCars /> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
