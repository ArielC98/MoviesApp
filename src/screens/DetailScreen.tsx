import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params //Para acceder a las propiedades de la interfaz Movie
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading,cast,movieFull} = useMovieDetails(movie.id);
  console.log(movieFull);
  

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Icon
          name="star-outline"
          color='grey'
          size={20}
        />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  posterImage: {
    flex: 1,
    overflow: 'visible'
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.6
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})
