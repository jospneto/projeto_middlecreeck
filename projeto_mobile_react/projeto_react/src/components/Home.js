import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Image, ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { Feather, EvilIcons, Ionicons, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import Midias from './Midias';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Home({navigation}) {
    //const [perfil, setPerfil] = useState(false);
    const [item, setItem] = useState('');
    const [itens, setItens] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'itens')).then(docSnap => {
          let itens = [];
          docSnap.forEach((doc) => {
            itens.push({...doc.data(), id:doc.id});
            setItens(itens);
          });
          console.log('Itens datas: ', itens);
        });
    }, []);

    function search(){
        console.log(itens.filter(item));
    }

    async function logout(){
        await signOut(auth).then(
            () => {
                navigation.navigate('Página Inicial')
                console.log('Logout realizado com sucesso.');
            }
        ).catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Image style={styles.imageLogout} source={require('../../src/imgs/Logo.png')}/>
                <TouchableOpacity onPress={logout}><MaterialIcons name="logout" size={50} color="white"/></TouchableOpacity>
            </View>
            <View style={styles.search}>
                <EvilIcons name="search" size={40} color="white" />
                <TextInput style={styles.input} value={item} onChangeText={(setItem)} placeholder='Digite o nome do item'/>
                <TouchableOpacity onPress={search} style={styles.search}><Text>Pesquisar</Text></TouchableOpacity>
            </View>
            <View style={styles.viewScroll}>
                <Text style={styles.text}>ITENS</Text>
                <ScrollView horizontal={true} style={styles.itensScroll}>
                    <View  style={styles.itenView}>
                        <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                            <Text style={{margin: 10, fontWeight: 600}}>Item</Text>
                            <TouchableOpacity style={styles.detailsItem}><Text>Detalhes</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.itenView}>
                        <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                            <Text style={{margin: 10, fontWeight: 600}}>Item</Text>
                            <TouchableOpacity style={styles.detailsItem}><Text>Detalhes</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.itenView}>
                        <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                            <Text style={{margin: 10, fontWeight: 600}}>Item</Text>
                            <TouchableOpacity style={styles.detailsItem}><Text>Detalhes</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.itenView}>
                        <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                            <Text style={{margin: 10, fontWeight: 600}}>Item</Text>
                            <TouchableOpacity style={styles.detailsItem}><Text>Detalhes</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.itenView}>
                        <Image style={styles.image} source={require('../../src/imgs/Logo.png')}/>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                            <Text style={{margin: 10, fontWeight: 600}}>Item</Text>
                            <TouchableOpacity style={styles.detailsItem}><Text>Detalhes</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.viewFunctions}>
                <Text style={styles.text}>O QUE VOCÊ DESEJA FAZER?</Text>
                <View style={styles.viewActions}>
                    <TouchableOpacity style={styles.actionsAdd} onPress={() => navigation.navigate('Adicionar Item')}>
                        <Ionicons name="add-circle" size={40} color="white" />
                        <Text style={{color: '#FFF', fontSize: 18, textAlign: 'center'}}>Adicionar item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionsDelete} onPress={() => navigation.navigate('Itens')}>
                        <FontAwesome name="th-list" size={40} color="white" />
                        <Text style={{color: '#FFF', fontSize: 18, textAlign: 'center'}}>Listar item</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={styles.actionsEdit} onPress={() => navigation.navigate('Itens')}>
                        <AntDesign name="edit" size={40} color="white" />
                        <Text style={{color: '#FFF', fontSize: 18, textAlign: 'center'}}>Editar item</Text>
    </TouchableOpacity>*/}
                </View>
            </View>
            <Midias/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDED24',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },

    menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },

    search:{
        width: 50,
        height: 20,
        backgroundColor: '#FFF',
        borderRadius: 8
    },

    image: {
        width: 50,
        height: 50
    },

    imageLogout: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 20
    },

    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    viewScroll:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:  'flex-start',
    },

    viewFunctions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:  'center',
        margin: 10
    },

    viewActions: {
        display: 'flex',
        flexDirection: 'row'
    },

    actionsAdd: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#B7E82F',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    actionsDelete: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#FFF503',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, 

    actionsEdit: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#FFF503',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, 

    itensScroll: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#88B50B',
        width: '100%',
        height: 170,
        padding: 20,
        margin: 10,
        marginHorizontal: 20,
        borderColor: '#FFFF',
        borderWidth: 3
    },

    itenView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 140,
        height: 120,
        margin: 10,
        borderRadius: 8
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

    text: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFF',
        textShadowColor:'#000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius: 8,
    },

    detailsItem: {
        textAlign: 'center',
        backgroundColor: '#DDED24',
        padding: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});