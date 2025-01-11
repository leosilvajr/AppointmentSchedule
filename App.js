

import Home from "./src/screens/home/home";
import Calendar from "./src/screens/calendar/calendar";
import Profile from "./src/screens/profile/profile";
import Main from "./src/screens/main/main";
import Services from "./src/screens/services/services";
import Schedule from "./src/screens/schedule/schedule";

import Routes from "./src/routes/routes.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return <NavigationContainer>
    <Routes/>
  </NavigationContainer>;
}
