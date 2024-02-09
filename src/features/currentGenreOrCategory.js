import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreOrCategoryName: "",
  page: 1,
  searchQuery: "",
};

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
