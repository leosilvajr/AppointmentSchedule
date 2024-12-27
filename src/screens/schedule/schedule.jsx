import { View } from "react-native"
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar"
import { useState } from "react"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

function Schedule (){

    //Variavel para armazenar qual dia esta selecionado
    const [selected, setSelected] = useState("")

    return <View style ={styles.container} >
        <Calendar theme={styles.theme}
            onDayPress={day => setSelected(day.dateString)}
            markedDates={{[selected]: {selected: true, disableTouchEvent: true}}}
            minDate={new Date().toISOString()}
        />
    </View>
}

export default Schedule