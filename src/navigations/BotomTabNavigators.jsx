import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from '../screens/home/homeScreen';
import { MovieScreen } from '../screens/movies/MovieScreen';
import { MoviePlay } from '../screens/movies/MoviePlay';
import { StackNavigators } from './StackNavigators';
import { UserProfile } from '../screens/Profile/UserProfile';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export const BotomTabNavigators = () => {




  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#f2058b',
                borderColor: '#000',
                borderWidth: 0,
                borderRadius:50,
                position: 'absolute',
                bottom: 10,
                left: 20,
                right: 20,
                elevation: 0,
                height: 50,
            },
            tabBarLabelStyle: {
                fontSize: 13,
                color: '#fff'
            }
        }}
    >
        <Tab.Screen 
            name='Movies' 
            component={StackNavigators}
            options={{
                title: 'Peliculas',
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name="play" 
                        size={24} 
                        color={ focused ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)'}
                    />
                )
            }}
        />

        <Tab.Screen 
            name='Profile' 
            component={UserProfile}
            options={{
                tabBarIcon: ({ focused}) => (
                    <AntDesign 
                        name="user" 
                        size={24} 
                        color={focused ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)' }
                    />
                )
            }}
        />
    </Tab.Navigator>
  )
}
