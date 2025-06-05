import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

export default function Coupons(props) {
  return (
    <View style={styles.OfferArea}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={styles.logo}
          source={{
            uri: props.Image,
          }}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: "5%",
          }}
        >
          {props.CouponName}
        </Text>
      </View>

      <Button title="Teklifi Gör >" color={"#fbdb04"} />
    </View>
  );
}

const styles = StyleSheet.create({
  OfferArea: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    padding: "5%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});
