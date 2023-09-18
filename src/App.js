import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import SideBar from "./components/SideBar/SideBar";
import SharedLayout from "./SharedLayout/SharedLayout";

export default function App() {
  return (
    <>
      <SideBar />
      <Routes>
        {/* Роут для сторінки "Home" */}
        <Route exact path="/" element={<HomePage />} />

        {/* Роути для інших сторінок */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>

        {/* Роут, якщо жоден із попередніх роутів не відповідає */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
