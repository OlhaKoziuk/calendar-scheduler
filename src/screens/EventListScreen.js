import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, setSelectedEvent } from '../redux/slices/eventsSlice';

const EventListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scheduled Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <View>
              <Text style={styles.eventTitle}>{item.name}</Text>
              <Text style={styles.eventDetails}>{item.time} - {item.repeat}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => {
                  dispatch(setSelectedEvent(item));
                  navigation.navigate('Create Event');
                }}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => dispatch(deleteEvent(item.id))}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.createButton} 
        onPress={() => navigation.navigate('Create Event')}
      >
        <Text style={styles.buttonText}>Create New Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDetails: {
    fontSize: 14,
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#FDCB58',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createButton: {
    marginTop: 20,
    backgroundColor: '#5A67D8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default EventListScreen;
