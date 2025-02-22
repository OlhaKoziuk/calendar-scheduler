import { createSlice } from '@reduxjs/toolkit';

const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const getDefaultTime = () => '00:00';

const initialState= {
  startDateEvent: getCurrentDate(),
  endDateEvent: getCurrentDate(),
  startTimeEvent: getDefaultTime(),
  endTimeEvent: getDefaultTime(),
  eventName: "",
  showModal: false,
  repeatEvent: 'weekly',
  events: [],
  selectedEvent: null, 
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setStartDateEvent: (state, action) => {
      state.startDateEvent = action.payload
    },
    setEndDateEvent: (state, action) => {
      state.endDateEvent = action.payload
    },
    setStartTimeEvent: (state, action) => {
      state.startTimeEvent = action.payload
    },
    setEndTimeEvent: (state, action) => {
      state.endTimeEvent = action.payload
    },
    setEventName: (state, action) => {
      state.eventName = action.payload
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
    setRepeatEvent: (state, action) => {
      state.repeatEvent = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      state.events = state.events.map((event) =>
        event.id === id ? { ...event, ...updatedEvent } : event
      );
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const { 
  setSelectedDate, 
  setEventName, 
  setShowModal,
  setStartDateEvent,
  setEndDateEvent,
  setStartTimeEvent,
  setEndTimeEvent,
  setRepeatEvent, 
  addEvent, 
  updateEvent, 
  deleteEvent, 
  setSelectedEvent
} = eventsSlice.actions;

export const date = (state) => state.events.selectedDate;
export const event = (state) => state.events.eventName;
export const isShowModal = (state) => state.events.showModal;
export const startDateEvent = (state) => state.events.startDateEvent;
export const endDateEvent = (state) => state.events.endDateEvent;
export const startTimeEvent = (state) => state.events.startTimeEvent;
export const endTimeEvent = (state) => state.events.endTimeEvent;
export const repeatEvent = (state) => state.events.repeatEvent;

export default eventsSlice.reducer;