import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/service/service";

function Services (props) { //Adicionar props para receber os parametros do objeto

  const id_doctor = props.route.params.id_doctor
  const name = props.route.params.name
  const specialty = props.route.params.specialty
  const iconDoctor = props.route.params.icon

  //Função para rexecutar ao clicar no botao de Agendar (Schedule)
  function ClickService(id_service){
    props.navigation.navigate("schedule", {id_doctor, id_service}) //Necessario redirecionar para a pagina Schedule
  }

    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  

        <View style={styles.banner}>
            <Image source={iconDoctor == "M" ? icon.male : icon.female}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
        </View>

        <FlatList data={doctors_services}
                  keyExtractor={(serv) => serv.id_service}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Service id_service={item.id_service}
                                    description={item.description}
                                    price={item.price}
                                    onPress={ClickService}
                    />     
        }}/>      
     </View>
}

export default Services; 