import { Button } from "@/components/Button";
import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Headers";
import { StyleSheet, View } from "react-native";

export function AboutView(){
    return (
        <View style={styles.container}>
            <View>
                <Header>Acerca de</Header>
            </View>
            <View>
                <Etiqueta>Mi app de clima</Etiqueta>            
                <Etiqueta>Desarrollado usando Expo + Reac Native</Etiqueta>
            </View>
            <View>
                <Etiqueta>Desarrolador:</Etiqueta>
                <Etiqueta>Jonathan Sanchez</Etiqueta>
            </View>
            <View>
                <Button title="Regresar al inicio" action={()=> alert("Hola")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5
    }
})