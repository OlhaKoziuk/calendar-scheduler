import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { 
  endDateEvent, 
  endTimeEvent, 
  setShowModal, 
  startDateEvent, 
  startTimeEvent 
} from '../redux/slices/eventsSlice';

const DateTimeSelection = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(startDateEvent);
  const endDate = useSelector(endDateEvent);
  const startTime = useSelector(startTimeEvent);
  const endTime = useSelector((endTimeEvent));

  return (
    <View>
      <Text style={styles.label}>Starts</Text>
      <View style={styles.dateTimeRow}>
        <TouchableOpacity style={styles.dateBox} onPress={() => dispatch(setShowModal(true))}>
          <Text>{startDate || 'Select Start Date'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text>{startTime || 'Select Start Time'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Ends</Text>
      <View style={styles.dateTimeRow}>
        <TouchableOpacity style={styles.dateBox} onPress={() => dispatch(setShowModal(true))}>
          <Text>{endDate || 'Select End Date'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text>{endTime || 'Select End Time'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
});

export default DateTimeSelection;
