import { StyleSheet, View } from "react-native";
import { AboutView } from "./AboutView";

export default function Index() {
  return (
    <View style={styles.container}>    
      {/* <HomeView/> */}
      <AboutView/>
    </View>
  );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0126',
    }
})