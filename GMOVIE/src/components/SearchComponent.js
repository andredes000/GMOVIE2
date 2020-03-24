import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchComponent = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" type="feather" size={30} iconStyle={{margin: 10}} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInputStyle}
        placeholder="Search"
        placeholderTextColor="#333232"
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#B9B9B9',
    height: 50,
    marginHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
