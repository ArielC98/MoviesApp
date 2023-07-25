import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

  const {peliculasEnCine,isLoading} = useMovies();
  const {top} = useSafeAreaInsets();


  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color='blue' size={90} />
      </View>
    )
  }

  return (
    <View style={{marginTop:top + 20}}>
      <MoviePoster 
        movie={peliculasEnCine[0]}
      />
    </View>
  )
}
