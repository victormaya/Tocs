import React from 'react'
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native'
import Header from './src/componentes/Header'
import TocList from './src/componentes/TocList'
import AddToc from './src/componentes/AddToc'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
const today = moment().startOf('hour').fromNow(); 


const initialState = {
  modalVisivel: false,
  caixaGrande : false,
    tocs:[{
        id: Math.random(),
        title: 'Tranquei a porta',
        date: today,

    },
    {
        id: Math.random(),
        title: 'Tranquei a torneira',
        date: today,

    },]
}

export default class App extends React.Component{
  state = {
    ...initialState
  }

  fechar = () => {
    return(
      this.setState({modalVisivel: false})
    )
  }

  salvarToc = title => {
    const toc = {id: Math.random(), title, date: today}
    const novo = this.state

    return(
      novo.tocs.push(toc),
      this.setState(novo),
      this.fechar
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <AddToc isVisible={this.state.modalVisivel}
        fechar={this.fechar} 
        salvarToc={this.salvarToc}/>
        <Header/>
        <TocList tocs={this.state.tocs}/>
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
}
})