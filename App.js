import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import pageOne from "./assets/Pages/pageOne";
import pageTwo from "./assets/Pages/pageTwo";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="pageOne"
          component={pageOne}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="pageTwo"
          component={pageTwo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
