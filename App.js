import { StyleSheet, Text, View } from "react-native";
import * as Svg from 'react-native-svg';

import { AppNavigation } from "./components/navigation/appnavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
