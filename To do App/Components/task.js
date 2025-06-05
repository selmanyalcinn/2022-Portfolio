import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Task(props) {
  return (
    <View style={styles.Task}>
      <Ionicons name="ios-checkbox" size={30} color="#fbdb04" />
      <Text style={styles.TaskText}>{props.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Task: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    marginTop: "2.5%",
    marginBottom: "6%",
    paddingLeft: "5%",
    padding: 10,
  },
  TaskText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
