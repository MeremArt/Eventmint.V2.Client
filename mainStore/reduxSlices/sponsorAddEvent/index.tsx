import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [] as any[],
};

const sponsorEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        ...action.payload.event,
        blink: action.payload.blink,
      });
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
});
export const { addEvent, clearEvents } = sponsorEventSlice.actions;
export {sponsorEventSlice};
