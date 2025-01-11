import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Main from "../screens/main/main";
import Home from "../screens/home/home";
import Calendar from "../screens/calendar/calendar";
import Profile from "../screens/profile/profile";
import Services from "../screens/services/services";
import Schedule from "../screens/schedule/schedule";


const Stack = createNativeStackNavigator();

function RoutesPrivate () {

    return <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="services" component={Services} options={{headerShown: false}}/>
        <Stack.Screen name="schedule" component={Schedule} options={{headerShown: false}}/>
        {/* <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="calendar" component={Calendar} options={{headerShown: false}}/>
        <Stack.Screen name="profile" component={Profile} options={{headerShown: false}}/> */}

    </Stack.Navigator>

}

export default RoutesPrivate