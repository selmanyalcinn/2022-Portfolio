import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Coupons from "./Pages/Coupons";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";

function HomeScreen({ navigation }) {
  return <Home />;
}

function ProfileScreen({ navigation }) {
  return <Profile />;
}

function CouponsScreen({ navigation }) {
  return <Coupons />;
}

function CategoriesScreen({ navigation }) {
  return <Categories />;
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Coupons"
        component={CouponsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Categories"
        component={CategoriesScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
