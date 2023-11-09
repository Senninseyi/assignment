import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";
import { Divider, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import CardImage from "../icons/cardImage1";
import CardImage2 from "../icons/cardImage2";
import BLocation from "../icons/blingLocation";
import Location from "../icons/location";
import { RequestCards } from "../components/card/card";
import { TruckCards } from "../components/card/truckCard";
import TruckIcon2 from "../icons/truckIcon2";
import TruckIcon3 from "../icons/truckIcon3";
import TruckIcon4 from "../icons/truckIcon4";
import HandIcon from "../icons/handIcon";
import { HeaderComponent } from "../components/header/header";

const { width } = Dimensions.get("window");

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent={false}
        backgroundColor={"#ef5600"}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <HeaderComponent />
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 20,
            paddingBottom: Platform.OS === "ios" ? 280 : 300,
            paddingHorizontal: 20,
            backgroundColor: "white",
            gap: 24,
          }}
        >
          <View>
            <View style={{ width: "100%", height: 155 }}>
              <CardImage2 />
            </View>

            <View
              style={{
                gap: 20,
                zIndex: 20,
                marginTop: -20,
                width: "100%",
                maxWidth: "90%",
                alignSelf: "center",
              }}
            >
              <View>
                <TextInput
                  mode="outlined"
                  placeholder="Pick up Location"
                  placeholderTextColor={"gray"}
                  cursorColor="gray"
                  style={styles.textInputStyle}
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Ionicons name="search" size={24} color="black" />
                      )}
                    />
                  }
                  right={<TextInput.Icon icon={() => <BLocation />} />}
                  theme={{
                    colors: {
                      background: "white",
                      primary: "gray",
                      elevation: 5,
                      shadow: {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                      },
                    },
                    roundness: 16,
                  }}
                />
              </View>

              <View>
                <TextInput
                  mode="outlined"
                  style={styles.textInputStyle}
                  placeholder="Drop off Location"
                  placeholderTextColor={"gray"}
                  cursorColor="gray"
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Ionicons name="search" size={24} color="black" />
                      )}
                    />
                  }
                  theme={{
                    colors: {
                      background: "white",
                      primary: "gray",
                      elevation: 5,
                      shadow: {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                      },
                    },
                    roundness: 16,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ gap: 14 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View>
                <Location width={24} height={24} />
              </View>
              <View>
                <Text style={styles.heading}>Novare Central</Text>
                <Text style={styles.description}>
                  Dalaba street, wuse zone 5, Abuja FCT
                </Text>
              </View>
            </View>

            <Divider />

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View>
                <Location width={24} height={24} />
              </View>
              <View>
                <Text style={styles.heading}>Airport Abuja</Text>
                <Text style={styles.description}>
                  Nnamdi Azikiwe International Airport, Abuja FCT
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              gap: 14,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: width / 2.3,
                gap: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <RequestCards color={"#ffe4d7"} title={"Instant Request"} />

              <RequestCards color={"#ffe4d7"} title={"Book Request"} />
            </View>
          </View>

          <View style={{ gap: 14 }}>
            <Text style={styles.heading}>Category</Text>

            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: "row",
                gap: 10,
                paddingVertical: 5,
                paddingLeft: 5,
                flexGrow: 1,
                paddingRight: Platform.OS === "android" ? 30 : 20,
              }}
              showsHorizontalScrollIndicator={false}
              bounces={true}
            >
              <TruckCards color={"white"} title={"Semi-Trailer"}>
                <TruckIcon4 width={100} height={65} />
              </TruckCards>

              <TruckCards color={"white"} title={"Cement mixer"}>
                <TruckIcon3 width={100} height={65} />
              </TruckCards>

              <TruckCards color={"white"} title={"Chassis cab"}>
                <TruckIcon2 width={100} height={65} />
              </TruckCards>
            </ScrollView>
          </View>

          <View>
            <CardImage />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  textInputStyle: {},

  heading: {
    fontSize: 18,
    fontWeight: "700",
  },

  description: {
    fontSize: 16,
    fontWeight: "400",
  },
});
