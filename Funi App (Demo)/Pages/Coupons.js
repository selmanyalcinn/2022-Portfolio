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
import Coupon from "./Components/Coupons";

export default function Categories() {
  const Coupons = [
    [
      "Spotify 5 Aylık",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDiicpDsawpNveT7Ota2-EC_vZbP8vneTbg&usqp=CAU",
    ],
    [
      "Starbucks İndirim",
      "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/7/2019/06/Starbucks-Logo.png",
    ],
    [
      "n11 50 TL Çeki",
      "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/0b/01/8d/0b018dd4-a9e7-c18e-b767-fae5e39b9458/AppIcon-Appstore-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    ],
    [
      "McDonald's İndirim",
      "data:image/png;base64,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",
    ],
  ];
  return (
    <View style={styles.Main}>
      <View style={styles.HomeArea}>
        <View style={styles.Logo}>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>
            Kuponlarım
          </Text>
        </View>
        <View style={styles.Coupons}>
          {Coupons.map((item, index) => {
            return <Coupon Image={item[1]} CouponName={item[0]} />;
          })}
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
  Coupons: {
    flex: 9,
    backgroundColor: "#efefef",
    padding: "3%",
  },

  BottomBar: {
    flex: 1,
    backgroundColor: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
});
