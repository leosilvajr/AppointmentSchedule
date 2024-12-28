import { View, Text } from "react-native"
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar"
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Button from "../../components/button/button"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

function Schedule (){
    //https://github.com/wix/react-native-calendars
    //https://github.com/react-native-picker/picker

    //Variavel para armazenar qual dia esta selecionado
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");

    return <View style ={styles.container} >

        <View >
            <Calendar theme={styles.theme}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString)
                }}
                markedDates={{
                    [selectedDate]: {selected: true, disableTouchEvent: true}
                }}
                minDate={new Date().toISOString()}
            />
            <View >
                <Text style={styles.textHour}>Time</Text>
            </View>


            <View>
                <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex) => {
                    setSelectedHour(itemValue)
                }}>
                    <Picker.Item label="08:00" value="08:00" />
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="10:00" value="10:00" />
                </Picker>
            </View>
        </View>

        <View>
            <Button text="Confirm Reservation" />
        </View>

    </View>
}

export default Schedule