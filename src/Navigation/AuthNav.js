import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import Register from "../Screens/Register";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthNav