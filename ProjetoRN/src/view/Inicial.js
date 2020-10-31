import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloInicial from '../styles/estiloInicial';

function Inicial({ navigation }) {

    const abrirProdutos = () => {
        navigation.navigate('Produtos')
    }

    const abrirDev = () => {
        navigation.navigate('Dev')
    }

    return (
        <View style={estiloInicial.container}>
            <Image
                style={estiloInicial.logo}
                source={require('../images/logo.png')} 
            />

            <TouchableOpacity style={estiloInicial.botao} onPress={abrirProdutos}>
                <Text style={estiloInicial.botaoTexto}>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estiloInicial.botao} onPress={abrirDev}>
                <Text style={estiloInicial.botaoTexto}>Desenvolvedores</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Inicial;