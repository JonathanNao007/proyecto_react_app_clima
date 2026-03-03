import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
interface IButton{
    title?: string,
    action?: any,
    children?: any
}

export function Button(props){
    return(
        <View style={styles.container}>
                <TouchableHighlight
                    underlayColor={"#09f"}
                    onPress={props.action}
                    style={styles.buttonStyle}>
                    <Text style={styles.textButton}>{props.title}</Text>
                </TouchableHighlight>
        </View>
        
    )
}

const styles = StyleSheet.create({
     container : {
        alignItems: 'center',
        padding: 10
    },
    buttonStyle: {
        width: 170,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#0ff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})