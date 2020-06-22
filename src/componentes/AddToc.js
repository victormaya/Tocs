import React from 'react'
import {View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native'




export default class AddToc extends React.Component { 
    state={
        title:''
    }

    save = () => {
        const newState = this.state
        this.props.salvarToc(this.newState.title)
    

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
                    value={this.state.title}
                    onChangeText={title=>this.setState({title})}/>
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
    )}
}

const styles = StyleSheet.create({
    fundo:{
        position:'relative',
        backgroundColor: '#ad2f8c',
        flex: 2,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    input:{
        backgroundColor: '#100610',
        borderRadius: 10,
        color: 'white',
        width: '80%'
        
    },
    botao:{
        position: 'relative',
        marginTop: 10,
        backgroundColor: '#100610',
        width: "30%",
        height: 30,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao:{
        color:'white',
        
    }
    
})