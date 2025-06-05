import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function CodeScanner() {
  useEffect(() => console.log(" effect"), []);
  return <View></View>;
}

const styles = StyleSheet.create({});
