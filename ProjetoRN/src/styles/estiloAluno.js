import { StyleSheet } from 'react-native';

const estiloAluno = StyleSheet.create({
   container: {   
      backgroundColor: '#B7D4FE',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',    
   },
   formularioContainer: {
	  justifyContent: 'center',
	  minWidth: 250,
   },
   textoContainer: {
      fontSize: 24,
      color: '#3E637E',
   },
   campoContainer: {
      flexDirection: 'row',
      margin: 5,
	  alignItems: 'center',
	  width: '100%'
   },
   campo: {
      width: '100%',
      fontSize: 18,
      color: '#000000',
      backgroundColor: '#ffffff',
      padding: 10,
      borderWidth: 1,
      borderColor: '#2F80ED',
      borderRadius: 5
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
      marginTop: 25,
  },
});

export default estiloAluno;