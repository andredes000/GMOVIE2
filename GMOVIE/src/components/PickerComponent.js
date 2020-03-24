import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const PickerComponent = () => {
  const [type, setType] = useState('');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue, itemPosition) => setType(itemValue)}>
        <Picker.Item label="Movies" value="Movies" />
        <Picker.Item label="TV" value="TV" />
      </Picker>
    </View>
  );
};

export default PickerComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 150,
  },
});
