import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri= `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  
  return (
    
    <View style={styles.container}>

      {
        actor.profile_path && 
        <Image
          source={{uri}}
          style={{width:50,height:50,borderRadius:10}}
        />
      }
      
      <View>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize: 16, opacity:0.7 }}>
          {actor.character}
        </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginBottom:10,
    paddingRight:6 ,
    gap:10,
    marginTop:5,
    borderRadius:10,
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOffset:{
      height:10,
      width:0
    },
    shadowOpacity:0.24,
    textShadowRadius:7,
    elevation:4,
    marginRight:10
  }
});
