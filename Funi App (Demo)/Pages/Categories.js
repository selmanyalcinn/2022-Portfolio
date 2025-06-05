import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import BottomBar from "./Components/BottomBar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Offers from "./Components/Offers";
import { FontAwesome } from "@expo/vector-icons";

export default function Categories() {
  const a = ["Gratis", "Starbucks", "AAAAAA", "SSSSSSSSSSSS"];
  return (
    <View style={styles.Main}>
      <View style={styles.HomeArea}>
        <View style={styles.Logo}>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>
            Kategoriler
          </Text>
        </View>
        <View style={styles.Search}>
          <View style={styles.SearchBar}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput
              style={{ marginLeft: "3%" }}
              placeholder="Kategori veya Kupon Arayın..."
            />
          </View>
        </View>
        <View style={styles.Categories}>
          <View style={styles.Category}>
            <Text>Funi Giy</Text>
          </View>
          <View style={styles.Category}>
            <Text>Funi Eğlen</Text>
          </View>
          <View style={styles.Category}>
            <Text>Funi Müzik</Text>
          </View>
          <View style={styles.Category}>
            <Text>Funi Kozmetik</Text>
          </View>
          <View style={styles.Category}>
            <Text>Funi Yiyecek</Text>
          </View>
        </View>
      </View>
      <View style={styles.BottomBar}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    flex: 1.8,
    backgroundColor: "#efefef",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  Main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  HomeArea: {
    flex: 9,
    backgroundColor: "red",
  },
  Search: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: "3%",
  },
  Categories: {
    flex: 8,
    backgroundColor: "#efefef",
    padding: "5%",
  },
  BottomBar: {
    flex: 1,
    backgroundColor: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  CategoryArea: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    padding: "5%",
  },
  Category: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  SearchBar: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: "5%",
  },
});
