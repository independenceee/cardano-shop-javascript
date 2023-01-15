import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import modalSlice from "./modal-slice";
import showInformationSlice from "./show-slice"
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
    show: showInformationSlice.reducer,
  },
});

export default store;
