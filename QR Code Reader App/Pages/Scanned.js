import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  Touchable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Scanned({ route, navigation }) {
  const { item } = route.params;
  useEffect(() => console.log(route.params.data), []);
  return (
    <View style={styles.Main}>
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home2", {})}
          style={styles.Header}
        >
          <Ionicons name="arrow-back" size={32} color="black" />
          <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: 10 }}>
            Results
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ResultArea}>
        <MaterialIcons name="web" size={180} color="#59c639" />
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#59c639" }}>
          Web Page
        </Text>
      </View>
      <View style={styles.URLarea}>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 10,
            fontSize: 18,
            color: "#59c639",
          }}
        >
          URL:
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 10,
            fontSize: 16,
            color: "#59c639",
          }}
        >
          {route.params.data}
        </Text>
      </View>
      <View style={styles.Button}>
        <Button
          onPress={() => Linking.openURL(route.params.data)}
          title="Go to Link"
          color={"#59c639"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  ResultArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 2,
  },
  URLarea: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: 2,
    paddingLeft: "5%",
    fontWeight: "bold",
  },
  Button: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    padding: "5%",
    justifyContent: "flex-end",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: "5%",
  },
});
