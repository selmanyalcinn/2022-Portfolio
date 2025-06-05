import React, { useEffect, useState } from "react";
import { Text, View, Linking, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState();
  const [scanned, setScanned] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanner = ({ type, data }) => {
    setScanned(true);
    alert(
      `Barcode with type ${type} and data ${Linking.openURL(
        `${data}`
      )} has been scanned`
    );
    setScanned(false);
  };
  if (hasPermission === null) {
    return <Text>Requesting for Camera Permission</Text>;
  }
  if (hasPermission === null) {
    return <Text>No Access to Camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  Button: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    height: 50,
    backgroundColor: "blue",
  },
});
