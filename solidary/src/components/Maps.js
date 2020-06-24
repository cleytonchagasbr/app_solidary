import React from 'react';
import MapView, {  Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions, ScrollView, Imagem } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import iconYou from '../../assets/icon.png';

export default class Maps extends React.Component {

    state =  {
        latitude: -23.5421123,
        longitude: -46.8259081,
        locais: [ 
                {
            id: 111,
            title: 'Local 1',
            description: 'Local 1',
            fone: '00 0000-0000',
            latitude: -23.5521123,
            longitude: -46.8259081,
            },
            {
                id: 222,
                title: 'Local 2',
                description: 'Local 2',
                fone: '00 0000-0000',
                latitude: -23.5621123,
                longitude: -46.8259081,
                },
                {
                    id: 333,
                    title: 'Local 3',
                    description: 'Local 3',
                    fone: '00 0000-0000',
                    latitude: -23.5721123,
                    longitude: -46.8259081,
                    }
        ]
    }

    render() {

        const { latitude, longitude } = this.state;
      

    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle}   
                initialRegion={{
                latitude,
                longitude,
                longitude: -46.8259081,
                latitudeDelta: 0.0041,
                longitudeDelta: 0.0032,
            }}>

                <Marker 
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}> 
                </Marker>


                {this.state.locais.map(local => (
                    <Marker 
                    key={local.id}
                    coordinate={{
                        latitude: local.latitude,
                        longitude: local.longitude
                    }}
                    ></Marker>
                ))}

            </MapView>

            <ScrollView style={styles.informationContainer} horizontal showsHorizontalScrollIndicator={false} pagingEnabled>

                {this.state.locais.map(local => (
                    <View style={styles.description}>
                    <Text style={styles.infoTitle}>{local.title}</Text>
                    <Text style={styles.infoAlimento}>{local.description}</Text>
                    <View style={styles.viewFone}>
                       <Text style={styles.infoFone}>{local.fone}</Text>
                       <AntDesign name="phone" size={24} color="white" style={styles.icons} />
                    </View>
                    
               </View>
                ))}
                    
                
            </ScrollView>
      </View>
    )
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'

    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },

    informationContainer: {
        width: '100%',
        maxHeight: 200,
    },
    description: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: "#FD9434",
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    infoTitle: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold'
    },
    infoAlimento: {
        fontSize: 20,
        color: '#FFF',
        paddingVertical: 10
    },
    infoFone: {
        fontSize: 20,
        color: '#FFF',
        paddingEnd: 5
     },
     viewFone: {
        flexDirection: "row",
     }
  });