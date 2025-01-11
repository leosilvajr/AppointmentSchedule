import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/service/service";

function Services () {

  //Função para rexecutar ao clicar no botao de Agendar (Schedule)
  function ClickService(id_service){
    console.log(id_service)
  }

    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  

        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Dr. Jessica Davis</Text>
            <Text style={styles.specialty}>Plastic Surgery</Text>
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