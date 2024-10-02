import { createSlice } from "@reduxjs/toolkit";

export const initialShowModal = {
  isModalOpen : false,
};

export const showModalSlice = createSlice({
  name: "showmodal",
  initialState: initialShowModal,
  reducers: {
    updateShowModal: (state) => {
      state.isModalOpen = ! state.isModalOpen
    },
   
  },
});

export const {updateShowModal} = showModalSlice.actions;
export default showModalSlice.reducer;
