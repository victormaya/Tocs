import React from 'react'
import {View, FlatList, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Tocs from './Tocs'
import Header from './Header'
import AddToc from './AddToc'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
const today = moment().startOf('hour').fromNow()

const initialState = {
    modalVisivel: false, 
    caixaGrande : false,
    atualizar: false,
      tocs:[]
  }

export default class TocList extends React.Component{
    state = {
        ...initialState
      }
    
    

    fechar = () => {
        return(        
        this.setState({modalVisivel: false})

    
        )
    } 


    addToc = novoToc => {
        if(!novoToc.title || !novoToc.title.trim()){
            Alert.alert('Toc Não Informado')
            return
        }
        this.tocsVisivel()
        const tocs=[...this.state.tocs]
        tocs.push({...novoToc})
        
        this.setState({tocs, modalVisivel: false}, this.tocsVisivel)
        
    }
    
    componentDidMount = () => {
            this.tocsVisivel()
    }

    tocsVisivel = () => {
        let visibleTocs=[...this.state.tocs]
        this.setState({visibleTocs})
    }
    
    
    render(){
        return(
            <View style={styles.container}>
            <AddToc isVisible={this.state.modalVisivel}
            fechar={this.fechar} 
            addToc={this.addToc}
            />
            <Header/>
            <View style={styles.list}>
                <FlatList data={this.state.visibleTocs}
                    keyExtractor={item=>`${item.id}`} 
                    renderItem={({item}) => <Tocs {...item}/>} />
            </View>
                <TouchableOpacity 
                style={styles.bgIcon} 
                onPress={() => this.setState({modalVisivel: true})}>
                    <Icon name = 'plus' style={styles.Icon}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    
    },
    list:{
        paddingTop: 2,
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