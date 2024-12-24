import { Image, View, Text } from "react-native";
import {styles} from "./appointment.style";
import icon from "../../constants/icon";

function Appointment(props){
    return <View style={styles.appointment} >
        <Text style={styles.name}>{props.service} - {props.doctor}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>



        <View style={styles.container}>

            <View style={styles.containerBooking}>

                <View style={styles.booking}>
                    <Image style={styles.icon} 
                        source={icon.calendar}/>
                    <Text style={styles.bookingDate}>15/10/2024</Text> //01:09:20
                </View>

                <View style={styles.booking}>
                    <Image style={styles.icon} 
                        source={icon.clock}/>
                    <Text style={styles.bookingHour}>08:30H</Text>
                </View>
                
            </View>

        </View>

    </View>
}

export default Appointment;