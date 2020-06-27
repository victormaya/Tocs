import React from 'react'
import {View, FlatList, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import cores from './cores'
import Tocs from './Tocs'
import Header from './Header'
import AddToc from './AddToc'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
const today = moment().startOf('hour').fromNow()

const initialState = {
    modalVisivel: false, 
    caixaCheck: false,
    allCheck: false,
    marc: 0,
    tocs:[
        {id: 1,  title: "A", date: today, caixaCheck: false, checkMarcado: false, },
        {id: 2,  title: 'B', date: today, caixaCheck: false, checkMarcado: false, },
        {id: 3,  title: "C", date: today, caixaCheck: false, checkMarcado: false, },
        {id: 4,  title: 'D', date: today, caixaCheck: false, checkMarcado: false, }
      ]
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

    checkDeletar = () => {
        this.setState({caixaCheck: !this.state.caixaCheck})
    }

    marcarTodas = () =>{
        const tocs=this.state.tocs.map(toc =>{
            toc.checkMarcado=!toc.checkMarcado
        })
        return(
            this.setState({tocs}),
            this.allCheck()
            )
    }

    allCheck = () => {
        const tocs = this.state.tocs
        let marc = this.state.marc
        for (const item of tocs){
            if(item.checkMarcado===true){
                marc+=1
            }
        }
        if( marc===tocs.length){
            this.setState({allCheck: true})
        }else{
            this.setState({allCheck: false})
        }

    } 

    marcarCheck= ident =>{
        const tocs = this.state.tocs
        const elemento = tocs.find(elemento => elemento.id===ident)
        const indice = tocs.indexOf(elemento)
        tocs[indice].checkMarcado=!tocs[indice].checkMarcado
        this.allCheck()

        return(
            this.setState({tocs})
        )
    }
    
    render(){
        return(
            <View style={styles.container}>
            <AddToc isVisible={this.state.modalVisivel}
            fechar={this.fechar} 
            addToc={this.addToc}
            />
            <Header checkDeletar={this.checkDeletar}
                caixaCheck={this.state.caixaCheck}
                allCheck={this.state.allCheck}
                marcarTodas={this.marcarTodas}/>
            <View style={styles.list}>
                <FlatList data={this.state.visibleTocs}
                    keyExtractor={item=>`${item.id}`}  
                    renderItem={({item}) => 
                    <Tocs {...item}
                    caixaCheck={this.state.caixaCheck}
                    marcarCheck={this.marcarCheck}                    
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