import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function note(props) {
  return (
    <View style={styles.note}>
      <View
        style={[
          styles.noteArea,
          {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#fbdb04",
            paddingLeft: "5%",
          },
        ]}
      >
        <FontAwesome5 name="sticky-note" size={30} color="black" />
        <Text style={styles.noteTitle}>{props.title}</Text>
      </View>

      <View
        style={[
          styles.noteArea,
          {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        ]}
      >
        <Text style={styles.noteText}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10%",
  },
  noteText: {
    marginLeft: 10,
    fontSize: 18,
    color: "gray",
  },
  noteArea: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "3%",
  },
  noteTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
