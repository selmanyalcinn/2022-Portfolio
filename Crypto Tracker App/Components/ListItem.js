import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageEditor,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Item({
  name,
  symbol,
  currentPrice,
  PriceChangePercentage,
  logoUrl,
  onPress,
}) {
  const priceChangeColor = PriceChangePercentage > 0 ? "#34C759" : "#FF3B30";
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Main}>
        <View style={styles.Items}>
          <Image
            style={styles.Image}
            source={{
              uri: logoUrl,
            }}
          />
          <View style={styles.TitlesArea}>
            <View
              style={[
                styles.Titles,
                {
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingStart: "5%",
                  flex: 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text style={styles.Text1}>{name}</Text>
              <Text style={styles.Text2}>{symbol}</Text>
            </View>
            <View style={styles.Titles}>
              <Text style={styles.Text1}>
                ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
              </Text>
              <Text style={[styles.Text2, { color: priceChangeColor }]}>
                {PriceChangePercentage}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    marginTop: "5%",
  },
  TitlesArea: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  Image: {
    height: 48,
    width: 48,
  },
  Items: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Titles: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-end",
    paddingRight: "5%",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 18,
    color: "black",
  },
  Text2: {
    fontSize: 14,
    color: "gray",
  },
});
