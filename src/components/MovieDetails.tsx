import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>

          <Icon
            name="star-outline"
            color="grey"
            size={16}
          />

          <Text>{movieFull.vote_average}</Text>
          <Text>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* Sinopsis */}

        <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold' }}>
          Sinopsis
        </Text>
        <Text>
          {movieFull.overview}
        </Text>

        <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 15 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>

      </View>
      {/* Casting */}
      <View>
        <Text style={{fontSize:20,marginTop:5,fontWeight:'bold', marginHorizontal:20}}>
          Actores
        </Text>
        
        {/* <CastItem actor={cast[0]} /> */}

        <FlatList
          data={cast}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=><CastItem actor={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop:5, marginLeft:20}}
        />
      </View>
    </>
  )
}
