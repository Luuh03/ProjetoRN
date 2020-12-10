import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloDev from '../styles/estiloDev';

import { MaterialIcons } from '@expo/vector-icons';

function Dev({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    const abrirAluno = () => {
        navigation.navigate('Aluno')
    }

    return(
        <View style={estiloDev.container}>
            <View style={estiloDev.devContainer}>
                <Image 
                    style={estiloDev.foto}
                    source={require('../images/luan.png')}
                />
                <Text style={estiloDev.textoContainer}>Luan E. de Queiroz</Text>
                <Text style={estiloDev.info}>3ºMIA</Text>
                <Text style={estiloDev.info}>Turma B</Text>
            </View>

            <View style={estiloDev.devContainer}>
                <Image 
                    style={estiloDev.foto}
                    source={require('../images/lucas.png')}
                />
                <Text style={estiloDev.textoContainer}>Lucas Galli Lopes</Text>
                <Text style={estiloDev.info}>3ºMIA</Text>
                <Text style={estiloDev.info}>Turma B</Text>
            </View>

            <TouchableOpacity style={estiloDev.add} onPress={abrirAluno}>
                <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={estiloDev.botao} onPress={voltar}>
                <Text style={estiloDev.textoContainer}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Dev;