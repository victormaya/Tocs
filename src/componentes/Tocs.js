import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import moment from 'moment'
import cores from './cores'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/Fontisto'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default props => {
    swipDel = () => {
        return (
            <TouchableOpacity onPress={() => props.delToc(props.id)} style={styles.fundoLixeira}>
                    <Icon style ={ styles.lixeira} name='trash'/>
            </TouchableOpacity>

        )
    }
    return(
        <Swipeable
            renderRightActions={swipDel}>
            <TouchableOpacity 
                style={styles.container} >
                <View style={styles.barraLeft}></View>
                <View style={styles.viewText}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.date}>Ultima vez: {props.date}</Text>
                </View>
                <View style={styles.viewBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => props.attMoment(props.id)}>
                        <Text style={styles.textoBotao}>Feito</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.claro,
        width: '100%',
        height: 96,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        position: 'relative',
        borderLeftColor:'purple',
        borderLeftWidth: 2,
    },viewText:{
        position: 'relative',
        width:'78.5%',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    viewBotao:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    title:{
        paddingLeft:10,
        fontSize: 25,
        color: "white",
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginTop:10,
    },
    date:{
        position: "relative",
        bottom: 10,
        paddingLeft: 10,
        fontSize: 13,
        fontWeight: "bold",
        color: 'white',
    },
    botao:{
        position: 'relative',
        backgroundColor: cores.escuro,
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: 60,
        padding: 15,
        right: 10,
        borderRadius: 10,
        elevation: 3,
    },
    textoBotao:{
        color:'white',
        
    },
    fundoLixeira:{
        backgroundColor: 'red',
        borderColor: cores.escuro,
        borderWidth: 1,
        padding: 20,
        alignItems: "flex-end",
        justifyContent: 'center',
        borderRadius: 10,
    },
    lixeira:{
        fontSize: 20,
        color: "white",
    }
    
})