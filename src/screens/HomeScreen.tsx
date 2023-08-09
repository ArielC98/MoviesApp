import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='blue' size={90} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>

        <View style={{ marginTop: top + 20 }}>
          <View
            style={{
              height: 430
            }}
          >

            <Carousel
              data={nowPlaying} //Se puede utilizar la notacion !nowPlaying en TypeScript para asegurar al compilador que el valor de la variable no será nulo en tiempo de ejecución y se puede poner poqrue arriba ya se hace la comprobacion de que habrá datos o sino el símbolo de carga no desaparece
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
            />
          </View>
          <HorizontalSlider movies={upcoming} title='Estrenos' />
          <HorizontalSlider movies={popular} title='Populares' />
          <HorizontalSlider movies={topRated} title='Mejor calificación' />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
