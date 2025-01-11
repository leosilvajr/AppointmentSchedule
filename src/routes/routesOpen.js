import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login/login.jsx";
import Account from "../screens/account/account.jsx";

const Stack = createNativeStackNavigator();

function RoutesOpen () {

    return <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="account" component={Account} />
    </Stack.Navigator>

}

export default RoutesOpen