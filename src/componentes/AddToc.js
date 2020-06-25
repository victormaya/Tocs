import React from 'react'
import {View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native'
import cores from './cores'
import moment from 'moment'
import 'moment/locale/pt-br'
const today = moment().startOf('hour').fromNow(); 

const estadoInicial ={id: '',  title: '', date: '', caixaCheck: false, checkMarcado: false, }

export default class AddToc extends React.Component { 
    state={
        ...estadoInicial
    }

    save =() => {
        const novoToc = {
            id: Math.random(),
            title: this.state.title,
            date: today,
            caixaCheck: false,
            checkMarcado: false,

        }

        this.props.addToc(novoToc)
        this.setState({...estadoInicial})
        
    }

    
    render(){
    
    
        

        return(
            <Modal transparent= {true} 
            visible={this.props.isVisible}>
                <TouchableWithoutFeedback 
                onPress={this.props.fechar}>
                    <View style={styles.container}/>
                </TouchableWithoutFeedback>


                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}> 
                    <View style={styles.fundo}>
                        <TextInput style={styles.input} 
                        placeholder='Titulo do Toc' 
                        placeholderTextColor='white'
                        onChangeText={title=>this.setState({title})}
                        value={this.state.title}
                        />
                        <TouchableOpacity style={styles.botao}
                        onPress={this.save}>
                            <Text style={styles.textoBotao}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableWithoutFeedback 
                onPress={this.props.fechar}>
                    <View style={styles.container}/>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
        position:'relative',
        backgroundColor: cores.claro,
        flex: 2,
        borderRadius: 10,
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        position: 'relative',
        flex: 2,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    input:{
        position:'relative',
        backgroundColor: cores.escuro,
        borderRadius: 10,
        color: 'white',
        width: '90%'
        
    },
    botao:{
        position: 'relative',
        marginTop: 10,
        backgroundColor: cores.escuro,
        width: "40%",
        height: 40,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao:{
        color:'white',
        
    }
    
})