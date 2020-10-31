import { StyleSheet } from 'react-native';

const estiloProdutos = StyleSheet.create ({
    container: {
        backgroundColor: '#F0F8FF',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto: {
        width: 190,
        height: 224,
        margin: 8,
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    botao: {
        backgroundColor: '#B9E6FF',
        width: '252px',
        height: '69px',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2F80ED',
    },
    textoContainer: {
        fontSize: 24,
        color: '#3E637E',
    },
    texto: {
        fontSize: 15,
    },
    preco: {
        fontSize: 14,
        color: '#1028FF',
        marginBottom: 35,
        marginTop: 9
    }
})

export default estiloProdutos;