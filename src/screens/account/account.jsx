import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button";
import { useState } from "react";
import api from "../../constants/api";

function Account(props) { //Toda tela que usar navegação precisa de props

    //Variaveis de estado, para armazenar os valores dos inputs
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    async function ExecuteAccount(){
        try {
            const response = await api.post('users/register', {name, email, password});

            if(response.data){
                console.log(response.data)
                Alert.alert('Conta criada com sucesso.');
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

                <View style={styles.containerInput}>
                    <TextInput placeholder="Name" style={styles.input} onChangeText={(name) => setName(name)} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput placeholder="Email" style={styles.input} onChangeText={(email) => setEmail(email)}/>
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Password" 
                        style={styles.input}
                        secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Button text="Create Account" onPress={ExecuteAccount}/>
            </View>

            <View style={styles.footer}> 
                <Text>I already have an account. </Text>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={styles.footerLink}>Log In</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Account;
