import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloProdutos from '../styles/estiloProdutos';

function Produtos({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return(
        <View style={estiloProdutos.container}>

            <Image 
                 style={estiloProdutos.foto}
                 source={require('../images/produtos/camisa1.png')}
            />
            <Text style={estiloProdutos.texto}>Camisa Xadrez Cinza e Vermelha</Text>
            <Text style={estiloProdutos.preco}>R$ 114,99</Text>

            <Image 
                style={estiloProdutos.foto}
                source={require('../images/produtos/camisa2.png')}
            />
            <Text style={estiloProdutos.texto}>Camisa Azul-Marinho</Text>
            <Text style={estiloProdutos.preco}>R$ 199,99</Text>

            <Image 
                style={estiloProdutos.foto}
                source={require('../images/produtos/camisa3.png')}
            />
            <Text style={estiloProdutos.texto}>Camisa Branca</Text>
            <Text style={estiloProdutos.preco}>R$ 169,99</Text>

            <Image 
                style={estiloProdutos.foto}
                source={require('../images/produtos/camisa4.png')}
            />
            <Text style={estiloProdutos.texto}>Camisa Xadrez Azul e Vermelha</Text>
            <Text style={estiloProdutos.preco}>R$ 89,99</Text>

            
            <TouchableOpacity style={estiloProdutos.botao} onPress={voltar}>
                <Text style={estiloProdutos.textoContainer}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Produtos;