import { FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import icon from "../../constants/icon";

function Home () {

    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  
        <Text style={styles.text}>Schedule of your medical services.</Text>

        <FlatList data={doctors}
                  keyExtractor={(doc) => doc.id_doctor}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Doctor name={item.name} 
                                   icon={item.icon === "M" ? icon.female : icon.male} 
                                   specialty={item.specialty}/>
                  }}/>
     </View>
}

export default Home;