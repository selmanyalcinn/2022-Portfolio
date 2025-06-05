import React, { useEffect, useState } from "react";
import { Text, View, Linking, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CodeScanner from "../Component/CodeScanner";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ route }) {
  const [hasPermission, setHasPermission] = useState();
  const [scanned, setScanned] = useState();
  const [update, setUpdate] = useState(route.params);
  const navigation = useNavigation();
  const data = "123";

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
      <View style={styles.Header}>
        <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: 10 }}>
          Scan Code
        </Text>
      </View>
      <View style={styles.ScanArea}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
          style={StyleSheet.absoluteFillObject}
        />
      </View>

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
  Header: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: "5%",
    paddingTop: "3%",
  },
  ScanArea: {
    flex: 7,
    backgroundColor: "#efefef",
  },
});
