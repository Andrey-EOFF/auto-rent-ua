import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
