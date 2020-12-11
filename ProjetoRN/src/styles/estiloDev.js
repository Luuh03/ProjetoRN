import { StyleSheet } from 'react-native';

const estiloDev = StyleSheet.create ({
    container: {
        backgroundColor: '#B7D4FE',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
        margin: 25,
        marginTop: 7
    },
    textoContainer: {
        fontSize: 24,
        color: '#3E637E',
    },
    texto: {
        fontSize: 20,
        marginTop: 14.5,
        marginBottom: 20
    },
    add: {
        height: 40,
        width: 40,
        backgroundColor: '#2F80ED',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 7
    }
})

export default estiloDev;