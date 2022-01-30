import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    // Style geral da pagina login
    container: {
        backgroundColor: '#253b4c',
        flex: 1,
        justifyContent: 'center'
    },

    // Style para a logo
    neki:{
        width: 238.4,
        height: 254.4,
        alignItems: 'center',
        marginLeft: '25%',
        marginBottom:110,
    },

    // Style para a caixa login
    login:{
        marginTop: 10,
        marginLeft: 60,
        height: 50,
        width: '80%',
        color: '#ffffff',
        borderWidth: 2,
        borderColor: 'white'
    },

    // Icons login e senha 
    user:{
        position:'absolute',
        left: 25,
        top: 22
    },

    // icon ver senha
    eye:{
        position:'absolute',
        left: 350,
        top: -40
    },

    // Style para checkbox gravar senha
    lembrar:{
        margin: 10
    },

    // Style texto checkbox
    checkT:{
        textAlign: 'right',
        marginTop: 7,
        color: 'white'
    },

    // Style checkbox
    checkbox:{
        flexDirection: 'row',
        marginLeft: 55,
        color: 'white'
    },

    // Botão de entrar
    botao:{
        backgroundColor: '#ffffff',
        color: '#253b4c',
        paddingTop: 7,
        fontSize: 15,
        textAlign: 'center', 
        borderRadius: 5,
        width: 370,
        height: 35,
        marginLeft: 20,
        marginTop: 5,
    },

    // Botão cadastre-se
    cadastro: {
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 20,
    },
   

    });