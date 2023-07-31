import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>

          <Icon
            name="star-outline"
            color="grey"
            size={16}
          />

          <Text>{movieFull.vote_average}</Text>
          <Text>
            - { movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
      </View>
      {/* Casting */}
    </>
  )
}
