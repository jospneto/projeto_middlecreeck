import { getDoc, doc} from 'firebase/firestore';
import { db } from '../firebase/config';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-web';
import { TouchableOpacity, CheckBox } from 'react-native-web';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login({navigation}) {
    const [isSelected, setSelection] = useState(false); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    /*function login(){
        getDoc(doc(db, 'users'));

        if(doc.exists){
            if(doc.email == email && doc.password == password){
                db.auth().createUserWithEmailAndPassword(email, password);
                navigation.navigate('Home');
            }else{
                console.log("Erro ao logar! Email ou Senha incorretos!");
            }    
        }
    }*/

    async function login(){
        await signInWithEmailAndPassword(auth, email, password).then(value => {
            if(isSelected == true){
                console.log('Login realizado com sucesso!');
                navigation.navigate('Home');
            }else{
                alert('Marque todos os campos');
            }
        }).catch(error => alert(error));
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../src/imgs/Logo_2.png')}/>
            <View style={styles.loginContainer}>
                <TextInput onChangeText={setEmail} style={styles.input} placeholder='Email'/>
                <TextInput onChangeText={setPassword} style={styles.input} placeholder='Senha'/>
                <View style={styles.check}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkBox}
                    />
                    <Text style={styles.text}>Lembrar-se de mim</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.login} onPress={login}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
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
    },

    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    check: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkBox: {
        margin: 10
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