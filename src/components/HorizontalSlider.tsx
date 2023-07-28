import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}


export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{
      height: (title ? 260 : 220),

    }}>
      {
        title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
      }
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (<MoviePoster movie={item} width={150} height={205} />)}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
