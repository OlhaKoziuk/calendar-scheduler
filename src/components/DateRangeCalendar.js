import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDateEvent, setEndDateEvent, startDateEvent, endDateEvent } from '../redux/slices/eventsSlice';

const DateRangeCalendar = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(startDateEvent);
  const endDate = useSelector(endDateEvent);

  const today = new Date().toISOString().split('T')[0];

  const handleDayPress = (day) => {
    if (day.dateString < today) {
      Alert.alert('Invalid Date', 'You cannot select a past date.');
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
    let markedDates = {};

    if (startDate) {
      markedDates[startDate] = { startingDay: true, color: '#FDCB58', textColor: '#fff' };
    }
    if (endDate) {
      markedDates[endDate] = { endingDay: true, color: '#FDCB58', textColor: '#fff' };
    }

    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      const lastDate = new Date(endDate);

      while (currentDate < lastDate) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dateString = currentDate.toISOString().split('T')[0];

        if (dateString !== endDate) {
          markedDates[dateString] = { color: '#FEEBC8', textColor: '#000' };
        }
      }
    }

    return markedDates;
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        markingType="period"
        theme={{
          todayTextColor: '#FDCB58',
          selectedDayBackgroundColor: '#FDCB58',
          arrowColor: '#000',
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
