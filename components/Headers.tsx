import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import { StyleSheet, Text } from "react-native"

interface IHeader {
    children? : any
}

export function Header (props){
    const context = useContext(AppContext)
    const styles =  StyleSheet.create({
        header:{
            fontSize : 50,
            margin : 10,
            textAlign : 'center',
            color: context.getTextColor()
        }
    })
    return <Text style={styles.header}>{props.children}</Text>
} 

