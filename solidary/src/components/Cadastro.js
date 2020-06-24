import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Cadastro({ navigation }) {

    return (
    
  <Formik
    initialValues={{ cep: '', email: '', nome: '', whatsapp: '', instagram: '' }}
    onSubmit={values => 
        console.log(values)
    
    }
  >

    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <View style={{ backgroundColor: "#FD9434", flexDirection: 'row', paddingBottom: 50, borderBottomLeftRadius: 50}}> 
            <View style={{width: '80%'}}>
                <Text style={styles.viewTitle}>Cadastre um ponto de coleta de doações</Text>
            </View>
            <View style={{right: 20, top: 20}}>
                <MaterialCommunityIcons name="map-marker-plus" size={24} color="#FFF"  />
            </View>
                
        </View>
        <View style={styles.viewInputs}>
            <TextInput
            style={styles.inputs}
            placeholder={"CEP"}
            onChangeText={handleChange('cep')}
            onBlur={handleBlur('cep')}
            value={values.cep}
            maxLength={8}
            placeholderTextColor="#cdcdcd"
            />
            <TextInput
            style={styles.inputs}
            placeholder={"Email"}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholderTextColor="#cdcdcd"
            />
            <TextInput
            style={styles.inputs}
            placeholder={"Responsável pelo ponto"}
            onChangeText={handleChange('nome')}
            onBlur={handleBlur('nome')}
            value={values.nome}
            placeholderTextColor="#cdcdcd"
            />

            <TextInput
            style={styles.inputs}
            placeholder={"Whatsapp (opcional)"}
            onChangeText={handleChange('whatsapp')}
            onBlur={handleBlur('whatsapp')}
            value={values.whatsapp}
            maxLength={12}
            placeholderTextColor="#cdcdcd"
            />
            <TextInput
            style={styles.inputs}
            placeholder={"Instagram (opcional)"}
            onChangeText={handleChange('instagram')}
            onBlur={handleBlur('instagram')}
            value={values.instagram}
            placeholderTextColor="#cdcdcd"
            />

            <View style={styles.styleButton}>
                <TouchableOpacity onPress={() => navigation.navigate('PosCadastro')} style={styles.styleButton}>
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>CADASTRAR PONTO</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <Text style={styles.infoDescription}>
                            Cadastrando um ponto de coleta, qualquer pessoa poderá encontrar o local e levar doações,
                            é importante lembrar que todo cuidado, manutenção e preservação fica de responsabilidade do
                            criador do ponto.
            </Text>
        </View>
        

      </View>
    )}
  </Formik>

    )
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: "#fcfcfc",
     alignItems: 'center',
     paddingHorizontal: 30

    },
    containerTitle: {
        marginHorizontal: 25,
        justifyContent: 'flex-start',
    },  
    viewTitle: {
     fontSize: 22,
     color: '#FFF',
     fontWeight: 'bold', 
     marginTop: 5,
     marginBottom: 25,
     marginHorizontal: 25,
    },  
    infoDescription: {
      color: "#929898",
      fontSize: 16,
      marginHorizontal: 30,
      bottom: 25,   
    },  
    viewInputs: {
      marginHorizontal: 25,
      paddingVertical: 15,
      backgroundColor: "#FFF",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
	  width: 0,
	  height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
      position: 'relative',
      bottom: 45

      },
     inputs: {
         fontSize: 22,
         color: '#FD9434',
         padding: 10,
         marginHorizontal: 25,
         borderBottomWidth: 1,
         borderBottomColor: '#dddd'
     },
      containerButton: {
          bottom: 150,
          marginHorizontal: 20,
      },
      styleButton: {
          marginVertical: 20,
          marginHorizontal: 25,
          backgroundColor: '#FD9434',
          borderRadius: 5,
          alignItems: 'center',
          fontWeight: 'bold', 
          
      }
 
  });
    
