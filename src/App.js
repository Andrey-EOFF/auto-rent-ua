import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import SideBar from "./components/SideBar/SideBar";
import SharedLayout from "./components/SharedLayout/SharedLayout";


export default function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/" element={<SharedLayout />}>
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
