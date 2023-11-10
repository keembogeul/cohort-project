import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export type DataType = {
  standardDate: string;
  uid: number;
  region: string;
};

// 초기 상태
interface CohortState {
  data: DataType[];
  error: string | null; // 타입 명시 추가
}

const initialState: CohortState = {
  data: [] as DataType[], // Use your DataType here
  error: null,
};

export interface RootState {
  cohort: ReturnType<typeof cohortSlice.reducer>;
}

// 비동기 액션 생성
export const fetchData = createAsyncThunk(
  "cohort/fetchData",
  async (_, thunkAPI) => {
    const response = await axios.get("/api/data");
    return response.data as DataType[];
  }
);

export const cohortSlice = createSlice({
  name: "cohort",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.data = action.payload;
    });
  },
});

export const { setData } = cohortSlice.actions;
export default cohortSlice.reducer;
