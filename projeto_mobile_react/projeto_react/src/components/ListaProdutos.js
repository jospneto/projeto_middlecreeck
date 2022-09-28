import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, Modal, ScrollView, StatusBar } from 'react-native-web';
import { Feather, EvilIcons, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function ListaProdutos({navigation}, {route}) {
    const [data, setData] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
      getDocs(collection(db, 'itens')).then(docSnap => {
        let itens = [];
        docSnap.forEach((doc) => {
          itens.push({...doc.data(), id:doc.id});
          setData(itens);
        });
        console.log('Itens datas: ', itens);
      });
    }, []);

    function deleteItem(id){
      deleteDoc(doc(db, 'itens', id)).then(value => {
        alert('Item deletado com sucesso!');
      }).catch(error => alert(error));
    }

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
        <View style={styles.item}>
              <Text style={styles.title}>{item.name.toUpperCase()}</Text>
              <View style={styles.functions}>
                <TouchableOpacity onPress={() => navigation.navigate('Editar Item', {id:item.id})}><AntDesign name="edit" size={35} color="white" /></TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(item.id)}><AntDesign name="delete" size={35} color="white" /></TouchableOpacity>
              </View>
        </View>
        )}
      />
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',  
      backgroundColor: '#DDED24',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 8
    },

    title: {
      fontSize: 26,
    },

    functions: {
        display: 'flex',
        flexDirection: 'row'
    }
  });