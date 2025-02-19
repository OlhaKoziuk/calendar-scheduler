import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { 
  date, 
  event, 
  isShowModal, 
  setEventName, 
  setSelectedDate, 
  setShowModal 
} from '../redux/slices/eventsSlice'

const CalendarScreen = () => {
  const selectedDate = useSelector(date);
  const eventName = useSelector(event);
  const showModal = useSelector(isShowModal);
  const dispatch = useDispatch();

  return (
    <Provider>
      <View style={styles.container}>
        <Calendar
          onDayPress={(day) => dispatch(setSelectedDate(day.dateString))}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#FDCB58' },
          }}
          theme={{
            todayTextColor: '#FDCB58',
            selectedDayBackgroundColor: '#FDCB58',
            arrowColor: '#000',
          }}
        />

        <Text style={styles.label}>Event Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Every Name"
          value={eventName}
          onChangeText={(text) => dispatch(setEventName(text))}
        />

        <View style={styles.dateTimeRow}>
          <TouchableOpacity 
            style={styles.dateBox} 
            onPress={() => dispatch(setShowModal(true))}
          >
            <Text>{selectedDate || 'Select Date'}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.dateBox} 
            onPress={() => dispatch(setShowModal(true))}
          >
            <Text>03:00 PM</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Repeat</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text>Every Week</Text>
        </TouchableOpacity>

        <Button 
          mode="contained" 
          style={styles.button} 
          onPress={() => alert('Event Created')}
        >
          Create New Event
        </Button>

        <Portal>
          <Modal 
            visible={showModal} 
            onDismiss={() => dispatch(setShowModal(false))} 
            contentContainerStyle={styles.modal}
          >
            <Text>Select Date or Time</Text>
            <Button onPress={() => dispatch(setShowModal(false))}>Close</Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    fontSize: 16,
  },
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dateBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FDCB58',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});

export default CalendarScreen;
