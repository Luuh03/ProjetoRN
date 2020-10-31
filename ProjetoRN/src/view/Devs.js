import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloDev from '../styles/estiloDev';

function Dev({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return(
        <View style={estiloDev.container}>
            <View style={estiloDev.devContainer}>
                <Image 
                    style={estiloDev.foto}
                    source={require('../images/luan.png')}
                />
                <Text style={estiloDev.textoContainer}>Luan E. de Queiroz</Text>
            </View>

            <View style={estiloDev.devContainer}>
                <Image 
                    style={estiloDev.foto}
                    source={require('../images/lucas.png')}
                />
                <Text style={estiloDev.textoContainer}>Lucas Galli Lopes</Text>
            </View>

            <Text style={estiloDev.texto}>3ºMI-A</Text>

            <TouchableOpacity style={estiloDev.botao} onPress={voltar}>
                <Text style={estiloDev.textoContainer}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Dev;