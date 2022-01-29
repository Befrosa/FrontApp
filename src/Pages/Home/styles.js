import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#253b4c',
        flex: 1,
    },
    box:{
        
     borderColor: "white",
     borderWidth: 2,
     height: 100,
     marginTop: 25,
     borderRadius: 5,
     marginLeft: 40,
     marginRight: 40,
     margin: 20

    },

    imageSkill:{
        borderRadius: 100,
        height: '50%',
        width: '15%',
        marginTop: 30,
        marginLeft: 10
    },
    text: {
        color: 'white',
        position: 'absolute',
        marginTop: 40,
        marginLeft: 100,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textL: {
        color: 'white',
        position: 'absolute',
        marginTop: 40,
        marginLeft: 270,
        fontSize: 18,
        fontWeight: 'bold'
    },
    modal:{
        backgroundColor: '#211f1f',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10,
        marginTop: 200,
        justifyContent: 'center'
    },
    new:{
        position: 'relative',
        marginTop: '3%',
        marginLeft: '89%'
    },
    salvar:{
        backgroundColor: '#253b4c',
        height: 30,
        marginTop: 40,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        padding: 7,
        color: 'white'
    },
    fechar:{
        backgroundColor: '#253b4c',
        height: 30,
        marginTop: 25,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        margin: 30, 
        padding: 7,
        textAlign: 'center',
        color: 'white'
    },
    delete:{
        marginStart: 300,
        position: 'relative',
        marginTop: -75
    },
    login:{
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white'
    },
    picker:{
        color: 'white'
    }
   
});