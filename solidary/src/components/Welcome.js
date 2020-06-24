import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Logo from '../../assets/solidary-logo.png';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function Welcome( { navigation } ) {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setError('A permissão para acessar o local foi negada');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Aguarde...';
  if(error) {
    text = error;
  } else if(location) {
    text = JSON.stringify(location);
  }

  return (

    <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.card}>
            <View style={styles.cardDirection}>
                <MaterialCommunityIcons name="food-variant" size={34} color="white" style={styles.icons} />
                <Text style={styles.cardText}>Doe alimentos para locais coletores</Text>
            </View>
            <View style={styles.cardDirection}>
                <AntDesign name="enviromento" size={34} color="white" style={styles.icons} />
                <Text style={styles.cardText}>Encontre locais de doação perto de você</Text>
            </View>
        </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
        <Text style={styles.encontrar}>Encontrar local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastrar}> Cadastrar local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
        <Text style={styles.cadastrar}>Ajude o projeto</Text>
      </TouchableOpacity>

      <View style={styles.info}>
          <Text style={styles.infoTitlte}>Sem fins lucrativos</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD9434",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 45,
    bottom: 50
  },
  card: {
    backgroundColor: '#FD9434',
    bottom: 10,
    width: 300,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 15,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  cardDirection: {
      flexDirection: "row",
      alignItems: "center"
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    padding: 5 
  },
  button: {
      backgroundColor:  '#F48F33' ,
      borderRadius: 10,
      width: 300,
      height: 50,
      alignItems: "center",
      top: 25,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: "#FFF",
      justifyContent: 'center',
      alignItems: 'center'
  },
  icons: {
    marginRight: 7
  },
  encontrar: {
    fontSize: 25,
    color: '#fff'
  },
  cadastrar: {
    fontSize: 25,
    color: '#fff'
  },
  info: {
    paddingTop: 50,
  },
  infoTitlte: {
    color: '#FFF'
  }
});