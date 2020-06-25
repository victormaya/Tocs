import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import moment from 'moment'
import cores from './cores'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/Fontisto'

const today = moment().startOf('hour').fromNow();



export default props => {
    return(
        <TouchableOpacity 
            style={styles.containerP} >
            <View style={styles.barraLeft}></View>
            <View style={styles.viewText}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.date}>Ultima vez: {props.date}</Text>
            </View>
            <View style={styles.viewBotao}>
                {props.caixaCheck ? 
                <TouchableOpacity style={styles.fundoCheck} onPress={()=>props.marcarCheck(props.id)}>
                    {props.checkMarcado? <Icon name='checkbox-active' style={styles.check}/>:<Icon name='checkbox-passive' style={styles.check}/>}    
                </TouchableOpacity>:
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Feito</Text>
                </TouchableOpacity>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerG:{
          

    },
    containerP:{
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
    fundoCheck:{
        position: 'relative',
        backgroundColor: cores.escuro,
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width:60,
        padding: 15,
        right: 10,
        borderRadius: 10,
        elevation: 3,
    },
    check:{
        color:'white',
        fontSize:20
    }
})