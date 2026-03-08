import { Button } from "@/components/Button";
import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Headers";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutView(){
    const context = useContext(AppContext)
    const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: context.getBackGroundColor(),
        
    }})
    const router = useRouter();    
    return (
        <SafeAreaView style={styles.container}>
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
                <Button title="Regresar al inicio" action={()=> router.back()}/>
            </View>
        </SafeAreaView>
    )
}

