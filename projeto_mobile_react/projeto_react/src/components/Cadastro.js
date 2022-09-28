import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, Alert} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Cadastro({navigation}) {
    /*const [name, setName] = useState('');*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*function register(){
        addDoc(collection(db, 'users'), {
            userName: name,
            email: email,
            password: password
        });

        if(name == '' || email == '' || password == ''){
            Alert.alert('Preencha seu dados por favor!');
        }else{
           if(addDoc){
            console.log('Usuário cadastrado com sucesso!');
            navigation.navigate('Home');
           }else{
            console.error('Erro ao cadastrar', addDoc);
           }
        }
    }*/

    async function register(){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            navigation.navigate('Home');
            console.log('Usuário cadastrado com sucesso!\n' + value.user.uid);
        }).catch(error => console.log(error));
    }

    return (
    <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../src/imgs/Logo_2.png')}/>
            {/*<TextInput onChangeText={(setName)} style={styles.input} placeholder='Nome'/>*/}
            <TextInput onChangeText={(setEmail)} value={email} style={styles.input} placeholder='Email'/>
            <TextInput onChangeText={(setPassword)} value={password} style={styles.input} placeholder='Senha'/>
            <TouchableOpacity onPress={register} style={styles.cadastro}><Text style={styles.text}>CADASTRAR-SE</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.text}>Já possui cadastro? Realize o login!</Text></TouchableOpacity>
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
        flexWrap: 'wrap',
        margin: 0,
        padding: 0
    },

    imagem: {
        width: 230,
        height: 165,
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

    input: {
        width: 260,
        height: 35,
        padding: 10,
        backgroundColor: '#FFFFFF',
        color: '#1E1E1E',
        margin: 10,
        borderRadius: 8
    },

    text: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFF'
    }
});