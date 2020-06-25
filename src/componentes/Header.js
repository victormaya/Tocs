import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import cores from './cores'
import Icon from 'react-native-vector-icons/Feather'


export default props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>TOC</Text>
            <TouchableOpacity style={styles.fundoLixeira} onPress={props.checkDeletar}>
                <Icon name='trash-2' style={styles.lixeira}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-between',
      alignItems:'center',
      flexDirection: 'row',
      elevation: 5,
      backgroundColor: cores.claro,
      elevation:2,
      

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
        color: 'white',
        elevation:2,
    },
    fundoLixeira:{
        backgroundColor: cores.escuro,
        borderRadius:50,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent:'center',
        right:10,
        
    },
    lixeira:{
        color: 'white',
        fontSize: 25,
    }
  })