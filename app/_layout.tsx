import { AppProvider } from "@/context/AppContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <AppProvider>  
      <Stack  screenOptions={{ header: () => null }}>
        <Stack.Screen
        name="index"
        options={{title: "Home App", headerShown: false}}
        />
        <Stack.Screen
        name="AboutView"
        options={{title: "About App", headerShown: false}}
        />
      </Stack>
  </AppProvider>
}
