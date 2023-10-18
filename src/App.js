import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export default function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="catalog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="favorites"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
