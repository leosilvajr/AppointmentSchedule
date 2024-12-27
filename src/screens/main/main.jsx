import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon"

import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";


const Tab = createBottomTabNavigator(); 
function Main(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={
                        {
                            width: 25, 
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    }/>
                }
            }}/>

            <Tab.Screen name="Calendar" component={Calendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={
                        {
                            width: 25, 
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    }/>
                }
            }}/>

            <Tab.Screen name="Profile" component={Profile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile} style={
                        {
                            width: 25, 
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    }/>
                }
            }}/>

        </Tab.Navigator>
    </NavigationContainer>
}

export default Main