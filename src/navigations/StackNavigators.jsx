import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native';
import { HomeScreen } from '../screens/home/homeScreen';
import { MovieScreen } from '../screens/movies/MovieScreen';
import { MoviePlay } from '../screens/movies/MoviePlay';


const Stack = createStackNavigator();

export const StackNavigators = () => {


  return (
    <Stack.Navigator
        // initialRouteName='MoviePlay'
        screenOptions={{
            // headerShown: false
            // headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            cardStyle:{
                backgroundColor: '#000'
            },
            headerStyle: {
                backgroundColor: '#000',
                borderBottomColor: '#c7c7c7',
                borderBottomWidth: 1
            }
        }}
    >
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen}/>
        <Stack.Screen name='Movie' options={{ title: 'Pelicula'}} component={MovieScreen}/>
        <Stack.Screen name='MoviePlay' component={MoviePlay}/>
    </Stack.Navigator>
  )
}
