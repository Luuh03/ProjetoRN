import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import estiloAluno from './../styles/estiloAluno';

function Aluno({ navigation }) {

    const [aluno, setAluno] = useState({});

    const salvar = (aluno) => {
        alunoFb.adicionarAluno(aluno);
        voltar();
    }

    return(
        <View style={estiloAluno.container}>
            <View style={estiloAluno.formularioContainer}>

              <View style={estiloAluno.campoContainer}>
                <TextInput 
                  style={estiloAluno.campo}
                  placeholder="Nome"
                  placeholderTextColor='#000'
                  onChangeText={nome => setAluno({...aluno, nome})}
                  value={aluno.nome}
                />
              </View>

              <View style={estiloAluno.campoContainer}>
                <TextInput 
                  style={estiloAluno.campo}
                  placeholder="Sala"
                  placeholderTextColor='#000'
                  onChangeText={sala => setAluno({...aluno, sala})}
                  value={aluno.sala}
                />
              </View>

              <View style={estiloAluno.campoContainer}>
                <TextInput 
                  style={estiloAluno.campo}
                  placeholder="Turma"
                  placeholderTextColor='#000'
                  onChangeText={turma => setAluno({...aluno, turma})}
                  value={aluno.turma}
                />
              </View>

              
            <TouchableOpacity onPress={() => salvar(aluno)} style={estiloAluno.botao}> 
	            <Text style={estiloAluno.textoContainer}>Adicionar</Text>
            </TouchableOpacity>
              

            </View>
        </View>
    );
}

export default Aluno;