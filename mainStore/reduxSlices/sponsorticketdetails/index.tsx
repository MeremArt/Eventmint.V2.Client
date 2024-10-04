import { createSlice } from "@reduxjs/toolkit";

export const initialTicketDetailState = {
  KeyMessage: "",
  ticketDescription: "",
  category: "", 
  amount: 0,
  quantity: 0, 
  image: "",
  imageUrl:"",
  imageName: "",
  location: '',
  date:'',
  industry:""
};

export const sponsorsTicketSlice = createSlice({
  name: "ticketDetails",
  initialState: initialTicketDetailState,
  reducers: {
    updateTicketName: (state, { payload }) => {
      state.
      KeyMessage = payload;
    },
    updateTicketDescription: (state, { payload }) => {
      state.ticketDescription = payload;
    },
    updateCategory: (state, { payload }) => {
      state.category = payload;
    },
    updateIndustry: (state, { payload }) => {
      state.industry = payload;
    },
    updateAmount: (state, { payload }) => {
      state.amount = payload;
    },
    updateQuantity: (state, { payload }) => {
      state.quantity = payload;
    },
    updateImageUrl: (state, { payload }) => {
      state.imageUrl = payload;
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

export const sponsorTicketAction = sponsorsTicketSlice.actions;

