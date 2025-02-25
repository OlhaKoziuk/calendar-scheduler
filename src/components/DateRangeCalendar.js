import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setStartDateEvent, 
  setEndDateEvent, 
  startDateEvent, 
  endDateEvent 
} from '../redux/slices/eventsSlice';
import useEvents from '../hooks/useEvents';

const DateRangeCalendar = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(startDateEvent);
  const endDate = useSelector(endDateEvent);
  const events = useEvents();
  const today = new Date().toISOString().split("T")[0];

  const handleDayPress = (day) => {
    if (day.dateString < today) {
      Alert.alert("Invalid Date", "You cannot select a past date.");
      return;
    }

    if (getDisabledDates()[day.dateString]) {
      Alert.alert("Date Unavailable", "This date is already booked.");
      return;
    }

    if (!startDate || (startDate && endDate)) {
      dispatch(setStartDateEvent(day.dateString));
      dispatch(setEndDateEvent(null));
    } else {
      dispatch(setEndDateEvent(day.dateString));
    }
  };

  const getMarkedDates = () => {
    let markedDates = { ...getDisabledDates() };
  
    if (startDate) {
      if (!markedDates[startDate]) {
        markedDates[startDate] = { startingDay: true, color: "#FDCB58", textColor: "#000" };
      }
    }
  
    if (endDate) {
      if (!markedDates[endDate]) {
        markedDates[endDate] = { endingDay: true, color: "#FDCB58", textColor: "#000" };
      }
    }
  
    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      while (currentDate < new Date(endDate)) {
        const dateString = currentDate.toISOString().split("T")[0];
      
        if (!markedDates[dateString]) {
          markedDates[dateString] = { color: "#FDCB58", textColor: "#000" };
        }
  
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  
    return markedDates;
  };

  const getDisabledDates = () => {
    let disabledDates = {};

    events.forEach((event) => {
      let currentDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      while (currentDate <= endDate) {
        const dateString = currentDate.toISOString().split("T")[0];
        disabledDates[dateString] = { disabled: true, color: "#5A67D8", textColor: "#fff" };
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return disabledDates;
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        markingType="period"
        theme={{
          todayTextColor: "#FDCB58",
          selectedDayBackgroundColor: "#FDCB58",
          arrowColor: "#000",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default DateRangeCalendar;
