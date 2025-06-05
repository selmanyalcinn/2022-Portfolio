import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.BottomBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.MenuButton}
      >
        <Entypo name="home" size={35} color="#fbdb04" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Coupons")}
        style={styles.MenuButton}
      >
        <FontAwesome name="ticket" size={35} color="#fbdb04" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.MenuButton}
      >
        <FontAwesome name="user" size={35} color="#fbdb04" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Categories")}
        style={styles.MenuButton}
      >
        <MaterialIcons name="category" size={35} color="#fbdb04" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomBar: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
    borderRadius: 20,
    padding: "5%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 5,
  },
  MenuButton: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    marginLeft: "5%",
    backgroundColor: "white",
    alignItems: "center",
  },
});
