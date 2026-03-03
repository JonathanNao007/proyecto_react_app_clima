import { StyleSheet, Text } from "react-native"

interface IHeader {
    children? : any
}

export function Header (props){
    return <Text style={styles.header}>{props.children}</Text>
} 

const styles =  StyleSheet.create({
    header:{
        fontSize : 50,
        margin : 10,
        textAlign : 'center'
    }
})