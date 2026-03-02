import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Headers";
import { View } from "react-native";

export function HomeView(){
    return (
        <View>
            <Etiqueta>Localizacion</Etiqueta>
            <Header>23 grados</Header>
            <Etiqueta>Viento: 20km/h</Etiqueta>
            {/*Imagen */}
            <Etiqueta>Ecerca de esta App</Etiqueta>
        </View>
    )
}