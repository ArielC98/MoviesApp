import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'

export const FadeScreen = () => {

  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue:1,
        duration:1000,
        useNativeDriver:true
      }
    ).start();
  }

  return (
    <View style={{
      flex:1,
      backgroundColor:'#00ff80',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Animated.View style={{
        marginBottom:20,
        backgroundColor:'#084F6A',
        width:150,
        height:150,
        borderColor:'white',
        borderWidth:10,
        opacity:opacity //opacity: opacity
      }}>

      </Animated.View>

      <Button
        title='Fade In'
        onPress={fadeIn}
      />
    </View>
  )
}
