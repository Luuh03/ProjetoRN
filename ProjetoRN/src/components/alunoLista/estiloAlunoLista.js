import { StyleSheet } from 'react-native';

const estiloAlunoLista = StyleSheet.create ({    
    devContainer: {
        width: 250,
        padding: 15,
        backgroundColor: '#B9E6FF',
        borderRadius: 31,
        borderWidth: 1,
        borderColor: '#2F80ED',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5.5
    },
    foto: {
        width: 150,
        height: 150,
        marginBottom: 12,
    },
    info: {
        fontSize: 17
    },
    textoContainer: {
        fontSize: 24,
        color: '#3E637E',
    }
});

export default estiloAlunoLista;