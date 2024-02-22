
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/home/homeScreen';
import { MovieScreen } from './src/screens/movies/MovieScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigators } from './src/navigations/StackNavigators';
import { BotomTabNavigators } from './src/navigations/BotomTabNavigators';



export default function App() {


  return (

    <>
      <StatusBar />
      <NavigationContainer>
        {/* <StackNavigators /> */}
        <BotomTabNavigators />
      </NavigationContainer>
    </>
    
  );
}




