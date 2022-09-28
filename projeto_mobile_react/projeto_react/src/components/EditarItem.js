import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Image, TextInput, TouchableOpacity } from 'react-native-web';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function editarItem({route}) {
    const [nomeItem, setNomeItem] = useState('');
    const [precoItem, setPrecoItem] = useState('');
    const [desc, setDesc] = useState('');

    function updateItem(id){
        updateDoc(doc(db, 'itens', id), {
            descricao: desc, 
            name: nomeItem, 
            preco: precoItem, 
        }).then(value => {
            alert("Item alterado com sucesso!");
        }).catch(error => alert(error));
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewAdd}>
                <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                {/*<Text>{props.id}</Text>*/}
                <View style={styles.viewInput}>
                    <TextInput style={styles.input} onChangeText={setNomeItem} value={nomeItem} placeholder='Nome do produto'/>
                    <TextInput style={styles.input}  onChangeText={setPrecoItem} value={precoItem} placeholder='Preço do produto'/>
                    <TextInput style={styles.inputDesc}  onChangeText={setDesc} value={desc} placeholder='Descrição do produto'/>
                </View>
                <TouchableOpacity onPress={() => updateItem(route.params.id)} style={styles.edit}><Text style={styles.text}>Editar produto</Text></TouchableOpacity>
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

    edit: {
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        width: 180,
        height: 50,
        backgroundColor: '#FFF503',
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