import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text, Button} from 'react-native';
import Midias from './Midias';

export default function Pagina_Inicial({navigation}) {
 return (
   <View style={styles.container}>
        <View style={styles.page}>
            <Image style={styles.imagem} source={require('../../src/imgs/Logo.png')}/>
            <TouchableOpacity style={styles.cadastro} onPress={() => navigation.navigate('Cadastro')}><Text style={styles.text}>CADASTRAR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
            <Midias/>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#86AE14',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        padding: 10,
        flexWrap: 'wrap',
    },

    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },  

    imagem: {
        width: 250,
        height: 235,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    cadastro: {
        padding: 5,
        width: 200,
        height: 44,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 8,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    login: {
        padding: 5,
        width: 200,
        height: 44,
        backgroundColor: '#C7F93B',
        textAlign: 'center',
        borderRadius: 8,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    text: {
        fontSize: 20,
        color: '#000',
        fontWeigh: 600
    }
});