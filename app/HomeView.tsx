import { Button } from "@/components/Button";
import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Headers";
import { ImagenClima } from "@/components/ImagenClima";
import { ScrollView, StyleSheet, View } from "react-native";

export function HomeView(){
    return (
        <View style={styles.container}>
            <ScrollView style={styles.fila}>
                <Etiqueta>Localizacion</Etiqueta>
                <Header>23</Header>
                <Etiqueta>Viento: 20km/h</Etiqueta>
                <ImagenClima></ImagenClima>
            </ScrollView>
            <View style={styles.bottom}>
                <Button title="Modo Oscuro" action={()=> alert('Ejecutando, cambio a modo Oscuro.')}></Button>
                {/* <Etiqueta alin='right'>Ecerca de esta App</Etiqueta> */}
                <Button title="Ecerca de esta App" action={()=> alert('Ejecutando, Acerca de esta app.')}></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        flexDirection: "column"
    },
    bottom: {
        bottom: 0,
        padding:2,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})