import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { peliculasEnCine, peliculasPopulares, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='blue' size={90} />
      </View>
    )
  }

  return (
    <ScrollView>

      <View style={{ marginTop: top + 20 }}>
        <View
          style={{
            height: 460
          }}
        >

          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider movies={peliculasPopulares} title='Populares'/>
      </View>
    </ScrollView>
  )
}
