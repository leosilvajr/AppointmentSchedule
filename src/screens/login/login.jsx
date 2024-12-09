import { Image, Text, View } from "react-native";
import logo from "../../assets/logo.png"
import { styles } from "./login.style";

function Login () {
    return <View>
        <Image source={logo} style={styles.logo} />
    </View>
}

export default Login;