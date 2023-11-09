import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const maxWidth = width <= 411 ? "40%" : "40%";

export const TruckCards = ({ color, children, title }) => {
  return (
    <View style={[styles.root, { backgroundColor: color }]}>
      <View>{children}</View>
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    maxWidth: Platform.OS === "android" ? maxWidth : "40%",
    borderWidth: 1,
    borderColor: "gray",
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    color: "gray",
  },
});
