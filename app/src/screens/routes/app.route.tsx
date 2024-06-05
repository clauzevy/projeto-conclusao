import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Home";
import { Login } from "../Login";

export function AppRoutes(){
const Stack = createNativeStackNavigator();

 return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>

 );
}



