import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeView } from "./HomeView";

export default function Index() {
  const context = useContext(AppContext)

  const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: context.getBackGroundColor()
    }
})

  return (
    <SafeAreaView style={styles.container}>    
      <HomeView/>
    </SafeAreaView>
  );
}
