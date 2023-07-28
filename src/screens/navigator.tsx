import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login/loginScreen";
import HomeScreen from "./home/homeScreen";
import { AppConstants } from "../constants/appConstants";
import DetailsScreen from "./details/detailsScreen";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={AppConstants.AppPaths.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={AppConstants.AppPaths.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={AppConstants.AppPaths.DETAILS} component={DetailsScreen} options={{
        title: "Details",
        headerShown: true,
        headerStyle:{
          backgroundColor: "#2196f3"
        },
        headerTitleStyle:{
          color: "#FFFFFF"
        },
        headerTintColor: '#FFFFFF'
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);
