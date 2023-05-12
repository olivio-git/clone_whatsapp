import { createSlice } from '@reduxjs/toolkit';
import { getAllData } from '../actions/dataActions';

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllDataApi: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(getAllData.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default dataSlice.reducer;
export const { getAllDataApi } = dataSlice.actions;
