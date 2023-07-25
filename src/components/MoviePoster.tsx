import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  console.log(uri);

  return (
    <View style={{
      width: 300,
      height: 450
    }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.47,
    shadowRadius: 4.65,
    elevation: 10,
  }
});
