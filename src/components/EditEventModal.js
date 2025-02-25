import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent } from '../redux/slices/eventsSlice';

const EditEventModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) => state.events.selectedEvent);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    setEventData(selectedEvent);
  }, [selectedEvent]);

  const handleChange = (key, value) => {
    setEventData((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleSave = () => {
    if (eventData?.id) {
      dispatch(updateEvent({ id: eventData.id, updatedEvent: eventData }));
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Event</Text>

          <Text>Event name:</Text>
          <TextInput
            style={styles.input}
            value={eventData.eventName || ""}
            onChangeText={(text) => handleChange("eventName", text)}
          />

          <Text>Start date:</Text>
          <TextInput
            style={styles.input}
            value={eventData.startDate || ""}
            onChangeText={(text) => handleChange("startDate", text)}
          />

          <Text>Start time:</Text>
          <TextInput
            style={styles.input}
            value={eventData.startTime || ""}
            onChangeText={(text) => handleChange("startTime", text)}
          />

          <Text>End Date:</Text>
          <TextInput
            style={styles.input}
            value={eventData.endDate || ""}
            onChangeText={(text) => handleChange("endDate", text)}
          />

          <Text>End time:</Text>
          <TextInput
            style={styles.input}
            value={eventData.endTime || ""}
            onChangeText={(text) => handleChange("endTime", text)}
          />

          <Text>Repeat:</Text>
          <TextInput
            style={styles.input}
            value={eventData.repeat || ""}
            onChangeText={(text) => handleChange("repeat", text)}
          />

          <View style={styles.buttonContainer}>
            <Button title="Save changes" onPress={handleSave} color="#FDCB58"/>
            <Button title="Cancel" onPress={onClose} color="#5A67D8" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});

export default EditEventModal;
