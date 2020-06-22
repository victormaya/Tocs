import React from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import Tocs from './Tocs'



export default class TocList extends React.Component{
    state={
        tocs: this.props.tocs,
    }
    render(){
        return(
                <View style={styles.container}>
                    <FlatList data={this.state.tocs}
                        keyExtractor={item=>`${item.id}`} 
                        renderItem={({item}) => <Tocs {...item}/>} />
                </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 3,
      flexDirection: 'column',
      backgroundColor: '#100610'
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    bgIcon:{
        position: "absolute",
        backgroundColor: "#ad2f8c",
        right: 25,
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: 'white',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowRadius: 0.2,

    },
    Icon:{
        color: 'white',
        fontSize: 20,
        margin: 20,
        



    },
    
  })