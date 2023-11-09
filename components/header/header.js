import { StyleSheet, Text, View } from "react-native";
import HandIcon from "../../icons/handIcon";
import NotificationIcon from "../../icons/notificationIcon";

export const HeaderComponent = () => {
  return (
    <View style={style.root}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={style.heading}>
          Hi, <Text>Olayimika</Text>
        </Text>
        <HandIcon width={40} height={40} />
      </View>

      <View>
        <NotificationIcon width={36} height={36} />
        <View
          style={{
            position: "absolute",
            padding: 5,
            backgroundColor: "red",
            top: 2,
            right: 9,
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    height: 70,
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
});
