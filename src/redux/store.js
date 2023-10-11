import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalog/catalogSlice";
// import { filterSlice } from "./filter/filterSlice";


export const store = configureStore({
  reducer: {
        catalog: catalogSlice.reducer,
        // filter: filterSlice.reducer,
  },
});
