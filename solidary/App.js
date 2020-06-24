import React from "react";
import Welcome from '../solidary/src/components/Welcome';
import Cadastro from '../solidary/src/components/Cadastro';
import Maps from '../solidary/src/components/Maps';
import PosCadastro from '../solidary/src/components/pages/PosCadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Welcome} options={{ headerStyle: { backgroundColor: '#FD9434',  elevation: 0} }}/>
        <Stack.Screen name="Maps" component={Maps} options={{ headerStyle: { backgroundColor: 'transparent',  elevation: 0}, headerTintColor: "transparent" }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerStyle: { backgroundColor: '#FD9434',  elevation: 0}, headerTintColor: "#FFF", headerTitle: '' }}/>
        <Stack.Screen name="PosCadastro" component={PosCadastro} options={{ headerStyle: { backgroundColor: '#FD9434',  elevation: 0}, headerTintColor: "#FFF", headerTitle: '' }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
     );
}

export default App;

