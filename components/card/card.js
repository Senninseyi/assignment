import { StyleSheet, Text, View } from "react-native";
import TruckIcon from "../../icons/truckIcon1";

export const RequestCards = ({ color, title }) => {
  return (
    <View style={[styles.root, { backgroundColor: color }]}>
      <View style={{ width: "100%", maxWidth: "50%" }}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View>
        <TruckIcon width={100} height={100} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "gray",
  },
});
