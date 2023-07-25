import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

  useEffect(()=>{

    movieDB.get('/now_playing')
      .then(res => {
        console.log(res.data);
      })
  },[])

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}
