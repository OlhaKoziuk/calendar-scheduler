import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  selectedDate: "",
  eventName: "",
  showModal: false,
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    setEventName: (state, action) => {
      state.eventName = action.payload
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    }
  },
});

export const { 
  setSelectedDate, 
  setEventName, 
  setShowModal 
} = eventsSlice.actions;

export const date = (state) => state.events.selectedDate;
export const event = (state) => state.events.eventName;
export const isShowModal = (state) => state.events.showModal;

export default eventsSlice.reducer;