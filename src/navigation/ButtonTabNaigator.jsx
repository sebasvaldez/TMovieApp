import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/home/homeScreen"
import { MovieScreen } from "../screens/movies/MovieScreen"
import { MoviePlay } from "../screens/movies/MoviePlay"
import { StackNavigator } from './StackNavigator';


const Tab=createBottomTabNavigator()

export const ButtonTabNaigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Inicio" component={StackNavigator} />
       
    </Tab.Navigator>
  )
}
