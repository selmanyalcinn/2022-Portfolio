import React from "react";
import Home from "./Pages/Home";
import Scanner from "./Pages/Scanner";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Scanned from "./Pages/Scanned";
import Home2 from "./Pages/Home2";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scan Code" component={Home} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Result"
        component={Scanned}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home2"
        component={Home2}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
