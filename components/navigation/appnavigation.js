import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Home from "../../screens/home";
import Account from "../../screens/account";
import Activity from "../../screens/activity";

import ActivityIcon from "../../icons/activityIcon";
import HomeIcon from "../../icons/homeIcon";
import AccountIcon from "../../icons/accountIcon";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: "flex",
            position: "absolute",
            bottom: 20,
            left: 25,
            right: 25,
            elevation: 5,
            backgroundColor: "#2e2f2e",
            borderRadius: 30,
            height: Platform.OS === "ios" ? 75 : 80,
            alignItems: "center",
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontWeight: "500",
            color: "white",
            fontSize: 18,
            paddingBottom: Platform.OS === "ios" ? -10 : 0,
            marginBottom: Platform.OS === "ios" ? -15 : 10,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === "ios" ? 2 : 0,
                }}
              >
                <ActivityIcon width={30} height={30} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === "ios" ? -15 : -20,
                  backgroundColor: "#f36f2e",
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <HomeIcon width={30} height={30} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === "ios" ? 2 : 0,
                }}
              >
                <AccountIcon width={30} height={30} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabBarStyle: {
    position: "absolute",
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
    height: 80.0,
    width: "100%",
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30.0,
    borderTopColor: "blue",
    borderTopWidth: 10,
    elevation: 2.0,
  },
  bottomTabSelectedIconStyle: {
    height: 40.0,
    width: 40.0,
    borderRadius: 20.0,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    backgroundColor: "#333333",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
