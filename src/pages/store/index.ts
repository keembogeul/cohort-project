import { configureStore } from "@reduxjs/toolkit";
import cohortReducer from "../slices/cohortSlice";
import { useDispatch } from "react-redux";

// config the store
const store = configureStore({
  reducer: {
    cohort: cohortReducer,
  },
});
export const useAppDispatch = () => useDispatch();

// export default the store
export default store;

// export the action
// export const iconAction = iconslice.actions
