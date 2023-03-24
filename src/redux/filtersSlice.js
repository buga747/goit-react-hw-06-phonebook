import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = {
  filter: '',
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilters,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state = action.payload.toLowerCase();
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
