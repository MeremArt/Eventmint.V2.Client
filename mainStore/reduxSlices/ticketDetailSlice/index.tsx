import { createSlice } from "@reduxjs/toolkit";

export const initialTicketDetailState = {
  KeyMessage: "",
  ticketDescription: "",
  category: "",
  amount: 0,
  quantity: 0,
  image: "",
  imageName: "",
  location: "",
  date: "",
};

export const ticketSlice = createSlice({
  name: "ticketDetails",
  initialState: initialTicketDetailState,
  reducers: {
    updateTicketName: (state, { payload }) => {
      state.ticketName = payload;
    },
    updateTicketDescription: (state, { payload }) => {
      state.ticketDescription = payload;
    },
    updateCategory: (state, { payload }) => {
      state.category = payload;
    },
    updateAmount: (state, { payload }) => {
      state.amount = payload;
    },
    updateQuantity: (state, { payload }) => {
      state.quantity = payload;
    },
    updateImage: (state, { payload }) => {
      state.image = payload.image;
      state.imageName = payload.imageName;
    },
    updateLocation: (state, { payload }) => {
      state.location = payload;
    },
    updateDate: (state, { payload }) => {
      state.date = payload;
    },
    resetTicketDetails: () => initialTicketDetailState,
  },
});

export const ticketAction = ticketSlice.actions;
export default ticketSlice.reducer;
