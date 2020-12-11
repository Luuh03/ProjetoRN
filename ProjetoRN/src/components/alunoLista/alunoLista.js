import React, { useState } from 'react';
import { Text, View } from 'react-native';
import estiloAlunoLista from './estiloAlunoLista';

const AlunoLista = ({data}) => {
    const[aluno, setAluno] = useState(data);

    return(
        <View style={estiloAlunoLista.devContainer}>
            <Text style={estiloAlunoLista.textoContainer}>{aluno.nome}</Text>
            <Text style={estiloAlunoLista.info}>{aluno.sala}</Text>
            <Text style={estiloAlunoLista.info}>{aluno.turma}</Text>
        </View>
    );
}

export default AlunoLista;