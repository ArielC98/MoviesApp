import React, { Children } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#084F64", "#75CEDB", "#FFFFFF"]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{x:0.1,y:0.1}}
        end={{x:0.5,y:0.5}}
      />
      {children}
    </View>
  )
}
