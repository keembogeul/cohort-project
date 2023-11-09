import { configureStore } from "@reduxjs/toolkit";
import cohortReducer from "../slices/cohortSlice";
import { useDispatch } from "react-redux";

// config the store
const store = configureStore({
  reducer: {
    cohort: cohortReducer,
  },
});
// export const useAppDispatch = () => useDispatch();
// Export the dispatch type
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export default the store
export default store;

// export the action
// export const iconAction = iconslice.actions
