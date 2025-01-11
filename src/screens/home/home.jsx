import { FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";

function Home (props) { //Recebendo as propriedades

  function ClickDoctor (id_doctor, name, specialty, icon){ 
      props.navigation.navigate("services", {id_doctor, name, specialty, icon})
  }

    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  
        <Text style={styles.text}>Schedule of your medical services.</Text>

        <FlatList data={doctors}
                  keyExtractor={(doc) => doc.id_doctor}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Doctor id_doctor={item.id_doctor}
                                   name={item.name} 
                                   icon={item.icon} 
                                   specialty={item.specialty}
                                   onPress={ClickDoctor}
                                   />
                                   
                  }}/>
     </View>
}

export default Home