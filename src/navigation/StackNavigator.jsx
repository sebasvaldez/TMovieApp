import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { HomeScreen } from "../screens/home/homeScreen";
import { MovieScreen } from "../screens/movies/MovieScreen";
import { MoviePlay } from "../screens/movies/MoviePlay";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    
    screenOptions=
      {{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        fontSize:25
        },
        cardStyle: {
          backgroundColor: "black",},
      }}
    
    >
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="MoviePlay" component={MoviePlay} />
    </Stack.Navigator>
  );
};
