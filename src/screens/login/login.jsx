import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button";

function Login() {
    return (
        <View style={styles.container}> 

            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Email" style={styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Password" 
                        style={styles.input}
                        secureTextEntry={true} 
                    />
                </View>

                <Button text="Access"/>
            </View>

            <View style={styles.footer}> 
                <Text>I don't have an account. </Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Create an account now.</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login;
