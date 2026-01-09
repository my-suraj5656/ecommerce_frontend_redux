import { createSlice } from "@reduxjs/toolkit";

const products = {
  items: [],
  loading: false,
  category: "",
  page: 1,
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload.products;
    },
    fetchFail: (state) => {
      state.loading = false;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFail, setCategory, setPage, setCategories } =
  productSlice.actions;
  
export default productSlice.reducer;
