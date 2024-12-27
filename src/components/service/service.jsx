import { View, Text } from "react-native"
import Button from "../../components/button/button";

function Service (props){
    return <View>
        <View>
            <Text >{props.description}</Text>
            <Text >{props.price}</Text>
        </View>

        <View>
            <Button text="Agendar" />
        </View>
    </View>
}

export default Service