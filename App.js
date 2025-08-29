import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {

  
const [lista, setLista] = useState([]);

useEffect(()=>{
  carregaDados();
}, []);

async function carregaDados() {
    var resultado = await fetch('https://fakestoreapi.com/products');
    var lst = await resultado.json();
    console.log(lst);
    setLista(lst);
}

  return (
    <ScrollView>
    <View style={styles.container}>
      {lista.map(
        (prod)=> 
        <View key={prod.id} style={styles.item}>
           <Image style={styles.image} source={{uri:prod.image}}></Image>
           <Text style={styles.titulo} >{prod.title}</Text>
           </View>
          )}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item:{
    margin:10,
    padding:10,
    flex:1,
    flexDirection:'row'

  },
  titulo:{
    flex:3,
    fontSize:15,
    fontWeight:'bold',
  },
  image:{
    width:50,
    height:50
  }
});
