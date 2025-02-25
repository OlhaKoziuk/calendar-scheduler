import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setEvents } from '../redux/slices/eventsSlice';

const useEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const storedEvents = await AsyncStorage.getItem("events");
        if (storedEvents) {
          dispatch(setEvents(JSON.parse(storedEvents)));
        }
      } catch (error) {
        console.error("Error loading events from AsyncStorage:", error);
      }
    };

    loadEvents();
  }, [dispatch]);

  useEffect(() => {
    const saveEvents = async () => {
      try {
        if (events.length > 0) {
          await AsyncStorage.setItem("events", JSON.stringify(events));
        } else {
          await AsyncStorage.removeItem("events");
        }
      } catch (error) {
        console.error("Error saving events to AsyncStorage:", error);
      }
    };

    saveEvents();
  }, [events]);

  return events;
};

export default useEvents;


