import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";

interface IEtiqueta{
    alinear? : string,
    children? : any 
}

export function Etiqueta(props){
    const context = useContext(AppContext)
    const alin = props.alin ? props.alin : 'center'
    const style = StyleSheet.create({
        text : {
            padding : 10,
            textAlign : alin,
            color: context.getTextColor()}
    })

    return <Text style={style.text}>{props.children}</Text>
}
