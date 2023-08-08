import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

  const {opacity, fadeIn,fadeOut} = useFade();
  

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
      <Button
        title='Fade Out'
        onPress={fadeOut}
      />
    </View>
  )
}
