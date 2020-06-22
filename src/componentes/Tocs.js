import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

const today = moment().startOf('hour').fromNow(); 

export default props => {
    return(
        <TouchableOpacity 
            style={styles.containerP} >
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.date}>Ultima vez: {props.date} id: {props.id}</Text>
            </View>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>botao</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerG:{
        backgroundColor: '#ad2f8c',
        width: '100%',
        height: 200,
        borderColor: '#100610',
        borderWidth: 1,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,        

    },
    containerP:{
        backgroundColor: '#ad2f8c',
        width: '100%',
        height: 50,
        borderColor: '#100610',
        borderWidth: 1,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,        

    },
    title:{
        paddingLeft:10,
        paddingTop: 5,
        fontSize: 17,
        color: "white",
        fontWeight: 'bold',
        fontFamily: 'Arial',

    },
    date:{
        paddingLeft: 10,
        fontSize: 13,
        fontWeight: "bold",
        color: '#100610',
    },
    botao:{
        position: 'relative',
        backgroundColor: '#100610',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        padding: 15,
        right: 10,
        borderRadius: 10,
    },
    textoBotao:{
        color:'white',
        
    }
})