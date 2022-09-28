import React from 'react';
import { View, Image, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function Midias() {
 return (
   <View style={styles.container}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/jospnetoh/')}><Image style={styles.images} source={require('../../src/imgs/Instagram.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jospneto')}><Image style={styles.images} source={require('../../src/imgs/GitHub.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jos%C3%A9-neto-20a4b8208/')}><Image style={styles.images} source={require('../../src/imgs/LinkedIn.png')}/></TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    images: {
        width: 50,
        height: 70,
        margin: 10
    }
});