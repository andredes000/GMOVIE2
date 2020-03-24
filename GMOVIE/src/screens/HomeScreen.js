import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import PickerComponent from '../components/PickerComponent';
import MovieComponent from '../components/MovieComponent';

const HomeScreen = () => {
  return (
    <>
      <SearchComponent />
      <ScrollView>
        <PickerComponent />
        <MovieComponent />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
