import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/service/service";

function Services () {

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
                    return <Service description={item.description} price={item.price} />     
                  }}/>      
     </View>
}

export default Services; //02:06:27