import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import BottomBar from "./Components/BottomBar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Offers from "./Components/Offers";

export default function Categories() {
  const a = [
    [
      "Gratis İndirim",
      "https://i.pinimg.com/originals/75/a5/5d/75a55d07a85c594ddac08b975464be64.jpg",
    ],
    [
      "Starbucks İndirim",
      "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/7/2019/06/Starbucks-Logo.png",
    ],
    [
      "Trendyol 50 TL",
      "https://kargotakip.org/wp-content/uploads/2021/04/trendyol-logo1.png",
    ],
    [
      "Netflix 3 Aylık",
      "https://cdn.webrazzi.com/uploads/2019/02/netflix-logo-originals.jpg",
    ],
  ];
  return (
    <View style={styles.Main}>
      <View style={styles.HomeArea}>
        <View style={styles.Logo}>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>
            Funi Anasayfa
          </Text>
        </View>
        <SafeAreaView style={styles.OffersArea}>
          <ScrollView style={styles.Offers}>
            {a.map((item, index) => {
              return <Offers Image={item[1]} OfferName={item[0]} />;
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.BottomBar}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    flex: 0.7,
    backgroundColor: "#efefef",

    justifyContent: "center",
    padding: "5%",
  },
  AdArea: {
    flex: 3,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
  OffersArea: {
    flex: 4,
    backgroundColor: "#efefef",
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
  BottomBar: {
    flex: 1,
    backgroundColor: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  Offers: {
    backgroundColor: "#efefef",
    flex: 1,
    paddingHorizontal: "3%",
  },
  Ad: {
    width: 368,
    height: 207,
    borderRadius: 20,
  },
});
