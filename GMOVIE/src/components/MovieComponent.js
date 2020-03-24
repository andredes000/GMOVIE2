import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import moviedb from '../api/moviedb';
import {FlatGrid} from 'react-native-super-grid';

const MovieComponent = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    moviedb.get('movie/popular', {params: {page: 2}}).then(response => {
      setResult(response.data.results);
    });
  }, []);
  return (
    <FlatGrid
      style={styles.gridView}
      itemDimension={140}
      items={result}
      spacing={10}
      renderItem={({item, index}) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            style={{width: 180, height: 230, borderRadius: 10}}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default MovieComponent;

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    width: 150,
    height: 220,
    marginBottom: 50,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
