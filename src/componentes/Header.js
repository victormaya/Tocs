import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import cores from './cores'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Fontisto'




export default props => {
    return(
        <View style={styles.container}>
            <Text style={props.caixaCheck ? styles.title:styles.title2}>TOC</Text>
            <View style={styles.botoes}>
                {props.caixaCheck ?
                    props.allCheck ? 
                        <TouchableOpacity style={styles.fundoLixeira} onPress={props.marcarTodas}>
                            <Icon2 name='checkbox-active' style={styles.check}/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.fundoLixeira} onPress={props.marcarTodas}>
                            <Icon2 name='checkbox-passive' style={styles.check}/>
                        </TouchableOpacity>
                        : 
                        null}
                <TouchableOpacity style={styles.fundoLixeira} onPress={props.checkDeletar}>
                    <Icon name='trash-2' style={styles.lixeira}/>
                </TouchableOpacity>
            </View>
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
        flex: 4
    },
    title2:{
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
        flex: 10.1
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
    botoes:{
        flexDirection:'row',
        justifyContent: "space-between",
        margin:2,        
        flex: 1,

    },
    lixeira:{
        color: 'white',
        fontSize: 25,
    },
    check:{
        
        color: 'white',
    },
  })