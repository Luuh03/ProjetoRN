import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import estiloDev from '../styles/estiloDev';

import { MaterialIcons } from '@expo/vector-icons';

function Desenvolvedores({ navigation }) {

    const [devs, setDevs] = useState([]);

    useEffect(() => {
        setAluno(route.params ? route.params : {});
    }, [route.params]);

    const voltar = () => {
        navigation.goBack();
    }

    const abrirAluno = () => {
        navigation.navigate('Aluno')
    }

    return(
        <View style={estiloDev.container}>
            
            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(aluno) => aluno.id}
                data={devs}
                renderItem={ ({aluno}) => <ItemLista data={aluno}/>}
            />

            <TouchableOpacity style={estiloDev.add} onPress={abrirAluno}>
                <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={estiloDev.botao} onPress={voltar}>
                <Text style={estiloDev.textoContainer}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Desenvolvedores;