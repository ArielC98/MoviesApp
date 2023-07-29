import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ height = 420, width = 300, movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const navigation = useNavigation<StackNavigationProp<RootStackParams,'DetailScreen'>>();

  return (
    <TouchableOpacity
      onPress={()=>navigation.navigate('DetailScreen',movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 7
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
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
