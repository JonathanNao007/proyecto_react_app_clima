import { StyleSheet, Text } from "react-native"

export function Header (props){
    return <Text style={styles.header}>{props.children}</Text>
} 

const styles =  StyleSheet.create({
    header:{
        fontSize : 30
    }
})