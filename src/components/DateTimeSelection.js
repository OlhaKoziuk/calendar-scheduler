import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { 
  endDateEvent, 
  endTimeEvent, 
  setEndTimeEvent, 
  setStartTimeEvent, 
  startDateEvent, 
  startTimeEvent 
} from '../redux/slices/eventsSlice';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimeSelection = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(startDateEvent);
  const endDate = useSelector(endDateEvent);
  const startTime = useSelector(startTimeEvent);
  const endTime = useSelector(endTimeEvent);
  const [isStartTimePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartTimePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleConfirmStartTime = (date) => {
    const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    dispatch(setStartTimeEvent(formattedTime))
    hideStartTimePicker ();
  };

  const showEndTimePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleConfirmEndTime = (date) => {
    const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    dispatch(setEndTimeEvent(formattedTime))
    hideEndTimePicker();
  };

  return (
    <View>
      <Text style={styles.label}>Starts</Text>
      <View style={styles.dateTimeRow}>
        <TouchableOpacity style={styles.dateBox}>
          <Text>{startDate || "Select Start Date"}</Text>
        </TouchableOpacity>
        <View>
          <Text 
            onPress={showStartTimePicker}
            style={[styles.timeBox, startTime ? styles.selectedTime : {}]}
          >
            {startTime || "Select Start Date"}
          </Text>
          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={handleConfirmStartTime}
            onCancel={hideStartTimePicker}
          />
        </View>
      </View>

      <Text style={styles.label}>Ends</Text>
      <View style={styles.dateTimeRow}>
        <TouchableOpacity style={styles.dateBox}>
          <Text>{endDate || "Select End Date"}</Text>
        </TouchableOpacity>
        <View>
          <Text 
            onPress={showEndTimePicker}
            style={[styles.timeBox, startTime ? styles.selectedTime : {}]}
          >
            {endTime || "Select End Date"}
          </Text>
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={handleConfirmEndTime}
            onCancel={hideEndTimePicker}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 5,
  },
  dateBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    textAlign: "center",
    flex: 1, 
  },
  timeBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    flex: 1, 
  },
});

export default DateTimeSelection;
