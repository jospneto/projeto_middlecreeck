import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Image, TextInput, TouchableOpacity } from 'react-native-web';

import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function AddItem() {
    const [nomeItem, setNomeItem] = useState('');
    const [precoItem, setPrecoItem] = useState('');
    const [desc, setDesc] = useState('');

    function registerItem(){
        addDoc(collection(db, 'itens'), {
            descricao: desc, 
            name: nomeItem, 
            preco: precoItem, 
        }).then(value => {
            alert("Item cadastrado com sucesso!");
        }).catch(error => alert(error));
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewAdd}>
                <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                <View style={styles.viewInput}>
                    <View style={styles.viewImg}>
                        <form>
                            <input type={'file'}/>
                            <button type='submit'>Enviar</button>
                        </form>
                    </View>
                    <TextInput style={styles.input} onChangeText={setNomeItem} value={nomeItem} placeholder='Nome do produto'/>
                    <TextInput style={styles.input} onChangeText={setPrecoItem} value={precoItem} placeholder='Preço do produto'/>
                    <TextInput style={styles.inputDesc} onChangeText={setDesc} value={desc} placeholder='Descrição do produto'/>
                </View>
                <TouchableOpacity style={styles.add} onPress={registerItem}><Text style={styles.text}>Adicionar produto</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDED24',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },

    viewImg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    buttonImg: {
        backgroundColor: '#DDED24',
        padding: 10
    },  

    image: {
        width: 100,
        height: 100
    },

    viewAdd: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    viewInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    input: {
        width: 260,
        height: 35,
        padding: 10,
        backgroundColor: '#A0B769',
        color: '#FFFF',
        margin: 10,
        borderRadius: 8,
        borderColor: '#FFFF',
        borderWidth: 3
    },

    inputDesc: {
        width: 260,
        height: 100,
        padding: 10,
        backgroundColor: '#A0B769',
        color: '#FFFF',
        borderRadius: 8,
        borderColor: '#FFFF',
        borderWidth: 3,
        flexWrap: 'wrap'
    },

    add: {
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        width: 180,
        height: 50,
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
        fontSize: 18,
        fontWeight: 600,
        color: '#FFF'
    }
});