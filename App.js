import React from "react";
// import { Asset } from "expo-asset";
// import { AppLoading } from "expo";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LiftMee from "./screens/LoginScreen";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwF_OiwqaX4jLMtsv39vL1rpkRdAMgNF4",
  authDomain: "liftmee-a750b.firebaseapp.com",
  databaseURL: "https://liftmee-a750b.firebaseio.com",
  projectId: "liftmee-a750b",
  storageBucket: "liftmee-a750b.appspot.com",
  messagingSenderId: "610288812836",
  appId: "1:610288812836:web:ab8c0f2fa1baa89daae9b1",
  measurementId: "G-6FXYSVQTZ2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppTabNavigator = createBottomTabNavigator();
function MyTabs() {
  return (
    <AppTabNavigator.Navigator>
      <AppTabNavigator.Screen name="Home" component={DashboardScreen} />
      <AppTabNavigator.Screen name="Home" component={DashboardScreen} />
    </AppTabNavigator.Navigator>
  );
}

const AuthStack = createStackNavigator({
  LoginScreen: LiftMee,
});

export default function App() {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
