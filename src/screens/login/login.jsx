import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button";
import { useState, useContext } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../context/auth";

function Login(props) {

    //Todo mundo que for usar o contexto, vai enxergar a variavel global user e setUser
    const {setUser} = useContext(AuthContext);

    //Variaveis de estado, para armazenar os valores dos inputs
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    async function ExecuteLogin(){
        try {
            const response = await api.post('users/login', {email, password});

            if(response.data){
                setUser(response.data);
            }

        } catch (error) {
            //Tratamento de erro
            if(error.response?.data.error){
                Alert.alert(error.response.data.error);
            }
            else{
                Alert.alert('Ops, ocorreu um erro. Tente novamente.');
            }
        }
    }

    return (
        <View style={styles.container}> 

            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View style={styles.containerInput} >
                    <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Password" 
                        style={styles.input}
                        secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Button text="Access" onPress={ExecuteLogin}/>
            </View>

            <View style={styles.footer}> 
                <Text>I don't have an account. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')} >
                    <Text style={styles.footerLink}>Create an account now.</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login;
