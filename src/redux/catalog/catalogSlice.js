import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    cars: [],
    page: 1,
    noMoreCars: false,
    isLoading: true,
    filters: {
      make: "",
      price: 0,
      mileage: { min: 0, max: 100000 },
    },
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = [...state.cars, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setNoMoreCars: (state, action) => {
      state.noMoreCars = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setCars, setPage, setNoMoreCars, setIsLoading, setFilters } =
  catalogSlice.actions;
