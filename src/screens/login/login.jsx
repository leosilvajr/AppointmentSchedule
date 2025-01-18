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

    async function ExecuteLogin() {
        try {
            const response = await api.post('users/login', { email, password });
    
            if (response.data) {
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`; // Injetando o token no header
                setUser(response.data);
            }
        } catch (error) {
            // Tratamento de erro detalhado
            if (error.response) {
                // O servidor respondeu com um status fora da faixa 2xx
                const statusCode = error.response.status;
                const errorMessage = error.response.data?.error || 'Erro desconhecido no servidor';
    
                switch (statusCode) {
                    case 400:
                        Alert.alert('Erro de solicitação', 'Verifique os dados enviados. Pode haver algum erro nos campos preenchidos.');
                        break;
                    case 401:
                        Alert.alert('Acesso negado', 'Credenciais inválidas. Verifique seu e-mail e senha.');
                        break;
                    case 403:
                        Alert.alert('Sem permissão', 'Você não tem permissão para acessar esse recurso.');
                        break;
                    case 404:
                        Alert.alert('Recurso não encontrado', 'O endereço ou recurso solicitado não foi encontrado.');
                        break;
                    case 500:
                        Alert.alert('Erro interno no servidor', 'Ocorreu um erro inesperado no servidor. Tente novamente mais tarde.');
                        break;
                    default:
                        Alert.alert('Erro inesperado', `Ocorreu um erro com o código ${statusCode}: ${errorMessage}`);
                        break;
                }
            } else if (error.request) {
                // A requisição foi feita, mas nenhuma resposta foi recebida
                Alert.alert(
                    'Sem resposta do servidor',
                    'Não foi possível obter uma resposta do servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.'
                );
            } else {
                // Outro tipo de erro ocorreu
                Alert.alert(
                    'Erro inesperado',
                    `Algo deu errado ao tentar realizar o login: ${error.message}`
                );
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
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Senha" 
                        style={styles.input}
                        secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Button text="Acessar" onPress={ExecuteLogin}/>
            </View>

            <View style={styles.footer}> 
                <Text>Não tenho uma conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')} >
                    <Text style={styles.footerLink}>Crie uma conta agora.</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login;
