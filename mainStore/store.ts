import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "./reduxSlices/ticketDetailSlice";
import profileReducer from "../component/features/profile/profileslice";
import userReducer from "../component/features/userslice/userSlice";
import { eventSlice } from "@/component/features/eventstore/eventSlice";
import { sponsorsTicketSlice } from "./reduxSlices/sponsorticketdetails";
import { profile } from "console";
import { sponsorEventSlice } from "./reduxSlices/sponsorAddEvent";
import showModalReducer from './reduxSlices/modalSlice'
export const store = configureStore({
  reducer: {
    ticketDetail: ticketSlice.reducer,
    sponsorTicketDetail: sponsorsTicketSlice.reducer,
    profile: profileReducer,
    event: eventSlice.reducer,
    sponsorEvent:sponsorEventSlice.reducer,
    user: userReducer,
    modal: showModalReducer
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
