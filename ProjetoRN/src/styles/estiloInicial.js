import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    container: {
        backgroundColor: '#B7D4FE',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#90BDFF',
        width: '252px',
        height: '69px',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        borderWidth: 1,
        borderColor: '#2F80ED',
    },
    botaoTexto: {
        fontSize: 24,
        color: '#ffffff',
    },
    logo: {
        width: 300,
        height: 225,
        marginBottom: 104,
    }
})

export default estiloInicial;