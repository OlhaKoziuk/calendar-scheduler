import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setRepeatEvent } from '../redux/slices/eventsSlice';

const RepeatSelect = () => {
  const dispatch = useDispatch();
  const repeatValue = useSelector((state) => state.events.repeatEvent);
  const [visible, setVisible] = useState(false);

  const options = [
    { label: 'Weekly', value: 'weekly' },
    { label: 'Bi-weekly', value: 'bi-weekly' },
    { label: 'Monthly', value: 'monthly' },
  ];

  return (
    <View>
      <Text style={styles.label}>Repeat</Text>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(true)}>
            <Text>{options.find((opt) => opt.value === repeatValue)?.label || 'Select Frequency'}</Text>
          </TouchableOpacity>
        }
      >
        {options.map((option) => (
          <Menu.Item 
            key={option.value} 
            onPress={() => {
              dispatch(setRepeatEvent(option.value));
              setVisible(false);
            }} 
            title={option.label} 
          />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default RepeatSelect;


