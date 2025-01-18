import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button";
import { useState } from "react";
import api from "../../constants/api";

function Account(props) { //Toda tela que usar navegação precisa de props

    // Variáveis de estado para os inputs e status
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); // Estado para armazenar o status da API
    const [isLoading, setIsLoading] = useState(false); // Estado para controle de carregamento

    // Função para consultar o status da API
    async function checkStatus() {
        setIsLoading(true); // Ativa o carregamento
        try {
            const response = await api.get('/status'); // Faz a requisição para o endpoint de status
            Alert.alert(response.data.message); // Atualiza a mensagem de status com a resposta
        } catch (error) {
            // Se houver erro, exibe uma mensagem
            Alert.alert('Erro ao acessar o status da API');
        } finally {
            setIsLoading(false); // Desativa o carregamento
        }
    }

    async function checkApiHttps() {
        try {
            // Faz a requisição GET diretamente para o endpoint
            const response = await fetch('https://reqres.in/api/users/2');
    
            // Verifica se a requisição foi bem-sucedida
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
    
            // Converte a resposta para JSON
            const data = await response.json();
    
            // Exibe os dados do usuário em um alerta
            Alert.alert(
                'Resposta da API',
                `Nome: ${data.data.first_name} ${data.data.last_name}\nEmail: ${data.data.email}`
            );''
        } catch (error) {
            // Trata possíveis erros da requisição
            Alert.alert('Erro ao acessar a API', error.message);
        }
    }
    

    // Função para criar conta
    async function ExecuteAccount() {
        try {
            const response = await api.post('users/register', {name, email, password});
            if(response.data){
                console.log(response.data)
                Alert.alert('Conta criada com sucesso.');
            }
        } catch (error) {
            if(error.response?.data.error){
                Alert.alert(error.response.data.error);
            } else {
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
            <View style={styles.footer} >
            <TouchableOpacity>
                    <Text style={styles.footerLink}  onPress={checkStatus}>Check API Status</Text>
                </TouchableOpacity>          
            </View>
            <View style={styles.footer} >
            <TouchableOpacity>
                    <Text style={styles.footerLink}  onPress={checkApiHttps}>Check API HTTPS</Text>
                </TouchableOpacity>          
            </View>

        </View>
    );
}

export default Account;
