import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import headerBg from '../assets/headerBg.jpg'

export default props => {
    return(
        <ImageBackground source={headerBg} style={styles.container}>
            <Text style={styles.title}>TOC</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row'
    },
    title:{
        left: 10,
        fontSize: 50,
        fontWeight: 'bold',
        textShadowOffset:{
            width: 3,
            height: 3,
        },
        textShadowRadius: 1,
        color: '#ad2f8c',
    }
  })