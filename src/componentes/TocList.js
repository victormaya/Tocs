import React from 'react'
import {View, FlatList, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import cores from './cores'
import Tocs from './Tocs'
import Header from './Header'
import AddToc from './AddToc'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import AsyncStorage from '@react-native-community/async-storage'



const initialState = {
    modalVisivel: false, 
    tocs:[]
}

export default class TocList extends React.Component{
    state = {
        ...initialState
      }
    componentDidMount = async() => {
        const stateString = await AsyncStorage.getItem('tocsState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state)
    }

    tocsVisivel = () => {
        let visibleTocs=[...this.state.tocs]
        this.setState({visibleTocs})
        AsyncStorage.setItem('tocsState', JSON.stringify(this.state))
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

    delToc = id => {
        const tocs = this.state.tocs
        const remove = []
        for (const item of tocs){
            if(item.id!=id){
                remove.push(item)
            }
        }
        this.setState({tocs: remove}, this.tocsVisivel)
    }

    attMoment = id => {
        const tocs = this.state.tocs
        tocs.forEach(item => {
            if(item.id===id){
                item.date = moment().format('LLL')
            }
        })
        this.setState({tocs}, this.tocsVisivel)

    }
    
    render(){
        return(
            <View style={styles.container}>
            <AddToc isVisible={this.state.modalVisivel}
            fechar={this.fechar} 
            addToc={this.addToc}
            />
            <Header />
            <View style={styles.list}>
                <FlatList data={this.state.visibleTocs}
                    keyExtractor={item=>`${item.id}`}  
                    renderItem={({item}) => 
                    <Tocs {...item}
                    caixaCheck={this.state.caixaCheck}
                    marcarCheck={this.marcarCheck}
                    delToc={this.delToc}
                    attMoment={this.attMoment}
                     />} />
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
        position: 'relative',
        backgroundColor: cores.escuro,
    
    },
    list:{
        paddingTop: 2,
        flex: 12,
        flexDirection: 'column',
        backgroundColor: cores.escuro,
        padding: 5,
        position: 'relative'
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    bgIcon:{
        position: "absolute",
        backgroundColor: cores.claro,
        right: 25,
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 2,
    },
    Icon:{
        color: 'white',
        fontSize: 20,
        margin: 20,
    },
    
})