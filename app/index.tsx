import { StyleSheet, View } from "react-native";
import { HomeView } from "./HomeView";

export default function Index() {
  return (
    <View style={styles.container}>    
      <HomeView/>
    </View>
  );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0126',
    }
})