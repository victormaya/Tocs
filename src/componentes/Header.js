import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import cores from './cores'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Fontisto'




export default props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>TOC</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'row',
      elevation: 5,
      backgroundColor: cores.claro,
      elevation:2,
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        textShadowOffset:{
            width: 3,
            height: 3,
        },
        textShadowRadius: 1,
        color: 'white',
    },
  })