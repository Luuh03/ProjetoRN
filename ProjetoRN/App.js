import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dev from './src/view/Devs';
import Inicial from './src/view/Inicial';
import Produtos from './src/view/Produtos';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Inicial} 
                options={{
                    headerStyle: { backgroundColor: '#90BDFF' },
                    headerTintColor: '#ffffff'
                }
                }
              />
              <Stack.Screen 
                name="Dev" 
                component={Dev} 
                options={{
                    headerStyle: { backgroundColor: '#B9E6FF' },
                    headerTintColor: '#3E637E'
                }
                }
              />
              <Stack.Screen 
                name="Produtos" 
                component={Produtos}
                options={{
                    headerStyle: { backgroundColor: '#B9E6FF' },
                    headerTintColor: '#3E637E'
                }
                }
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
