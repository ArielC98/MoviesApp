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

export const MoviePoster = ({ height = 410, width = 300, movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const navigation = useNavigation<StackNavigationProp<RootStackParams,'DetailScreen'>>();

  return (
    <TouchableOpacity
      onPress={()=>navigation.navigate('DetailScreen',movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom:5,
        paddingHorizontal:7,
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
    flex: 1
  }
});
