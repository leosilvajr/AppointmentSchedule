import { Image, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./doctor.style";

function Doctor (props){ //TouchableOpacity Propriedade Clicavel
    return <TouchableOpacity style={styles.doctor}>
        <Image source={props.icon} style={styles.icon}/>

        <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>
        </View>

    </TouchableOpacity>
}   

export default Doctor;