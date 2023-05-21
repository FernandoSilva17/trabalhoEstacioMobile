import  React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from './Telas/Inicio';
import FazerLogin from './Telas/FazerLogin';
import Conta from './Telas/CriarConta';
import VamosComecar from './Telas/VamosComecar';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="FazerLogin">
        <Drawer.Screen
        name='Inicio'
        component={Inicio}
        options={{
          title: 'INICIO',
          headerStyle: {
            backgroundColor: '#B0C4DE'
          },
          headerTintColor: 'white',
          headerShown: false
        }}/>
        <Drawer.Screen 
        name='FazerLogin'
        component={FazerLogin}
        options={{
          title: 'FazerLogin',
          headerStyle: {
            backgroundColor: '#B0C4DE'
          },
          headerTintColor: 'white',
          headerShown: false
        }}/>
        <Drawer.Screen 
        name='Conta'
        component={Conta}
        options={{
          title: 'Conta',
          headerStyle: {
            backgroundColor: '#B0C4DE'
          },
          headerTintColor: 'white',
          headerShown: false
        }}/>
        <Drawer.Screen 
        name='VamosComecar'
        component={VamosComecar}
        options={{
          title: 'VamosComecar',
          headerStyle: {
            backgroundColor: '#B0C4DE'
          },
          headerTintColor: 'white',
          headerShown: false
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


