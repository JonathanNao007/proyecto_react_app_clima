import { Text } from "react-native";

interface IEtiqueta{
    alinear? : string,
    children? : any 
}

export function Etiqueta(props){
    const alin = props.alin ? props.alin : 'center'
    return <Text style={
        {
            padding : 10,
            textAlign : alin
        }}>{props.children}</Text>
}
