import React, { useEffect, useState } from "react";
import { Text, View, Linking, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CodeScanner from "../Component/CodeScanner";

export default function Home({ route }) {
  const [hasPermission, setHasPermission] = useState();
  const [scanned, setScanned] = useState();
  const [update, setUpdate] = useState(route.params);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      console.log("selman");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      console.log(scanned);
      setScanned(undefined);
    })();
  }, []);

  useEffect(() => {
    console.log();
  });

  const handleBarCodeScanner = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Result", { data });
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
      <CodeScanner />
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
