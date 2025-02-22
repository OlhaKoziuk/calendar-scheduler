import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setEventName, setShowModal } from '../redux/slices/eventsSlice';
import DateRangeCalendar from '../components/DateRangeCalendar';
import DateTimeSelection from '../components/DateTimeSelection';
import RepeatSelect from '../components/RepeatSelect';

const CalendarScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const eventName = useSelector((state) => state.events.event);
  const showModal = useSelector((state) => state.events.isShowModal);

  return (
    <Provider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <DateRangeCalendar />

            <Text style={styles.label}>Event Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event name"
              value={eventName}
              onChangeText={(text) => dispatch(setEventName(text))}
            />

            <DateTimeSelection />
            <RepeatSelect />

            <Button 
              mode="contained" 
              style={[styles.button, { backgroundColor: '#5A67D8' }]} 
              onPress={() => navigation.navigate('Events List')}
            >
              View Events
            </Button>

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
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FDCB58',
    paddingVertical: 10,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});

export default CalendarScreen;




