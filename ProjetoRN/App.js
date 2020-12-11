import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Desenvolvedores from './src/view/Desenvolvedores';
import Inicial from './src/view/Inicial';
import Produtos from './src/view/Produtos';
import Aluno from './src/view/Aluno';

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
                name="Desenvolvedores" 
                component={Desenvolvedores} 
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
              <Stack.Screen 
                name="Aluno" 
                component={Aluno}
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
