import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from "react-native-responsive-linechart";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export default function Crypto({ route, navigation }) {
  const { item } = route.params;
  const priceChangeColor =
    item.price_change_percentage_7d_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor1h =
    item.price_change_percentage_1h_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor24h =
    item.price_change_percentage_24h_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor7d =
    item.price_change_percentage_7d_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor14d =
    item.price_change_percentage_14d_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor30d =
    item.price_change_percentage_30d_in_currency > 0 ? "#34C759" : "#FF3B30";

  const priceChangeColor1y =
    item.price_change_percentage_1y_in_currency > 0 ? "#34C759" : "#FF3B30";

  const line = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: item.sparkline,
        strokeWidth: 2, // optional
      },
    ],
  };

  useEffect(() => {
    console.log(item.sparkline_in_7d.price);
    console.log(item.sparkline_in_7d.price[2]);
  }, []);

  const [graphics, setGraphics] = useState(item.sparkline_in_7d.price);
  const width = (Dimensions.get("window").width * 93) / 100;
  return (
    <View style={styles.Main}>
      <View style={{ flex: 0.5, backgroundColor: "white" }}></View>
      <View style={styles.Header}>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <Image style={styles.Image} source={{ uri: item.image }} />
        <Text style={[styles.Text1]}>{item.name}</Text>
        <Text style={styles.Text2}>({item.symbol.toUpperCase()})</Text>
      </View>
      <View style={styles.PriceArea}>
        <Text style={[styles.Text1, { fontSize: 34, marginLeft: 10 }]}>
          ${item.current_price.toLocaleString("en-US", { currency: "USD" })}
        </Text>
        <Text
          style={[
            styles.Text2,
            { color: priceChangeColor, marginLeft: 5, fontSize: 22 },
          ]}
        >
          {item.price_change_percentage_7d_in_currency.toFixed(2)}%
        </Text>
      </View>

      <View style={styles.ChartArea}>
        <View style={styles.Chart}>
          <VictoryChart theme={VictoryTheme.material} width={width}>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              data={graphics}
            />
          </VictoryChart>
        </View>
        <View style={styles.Buttons}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            7 Days Price Change Percentage Graphic
          </Text>
        </View>
      </View>
      <View style={styles.Changes}>
        <View style={styles.ChangeTop}>
          <Text style={{ fontWeight: "bold" }}>1 Hour</Text>
          <Text style={{ fontWeight: "bold" }}>24 Hour</Text>
          <Text style={{ fontWeight: "bold" }}>7 Day</Text>
          <Text style={{ fontWeight: "bold" }}>14 Day</Text>
          <Text style={{ fontWeight: "bold" }}>30 Day</Text>
          <Text style={{ fontWeight: "bold" }}>1 Year</Text>
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            marginBottom: 5,
            marginTop: 5,
          }}
        />
        <View style={styles.ChangeBottom}>
          <Text style={{ color: priceChangeColor1h }}>
            {item.price_change_percentage_1h_in_currency.toFixed(2)}%
          </Text>
          <Text style={{ color: priceChangeColor24h }}>
            {item.price_change_percentage_24h_in_currency.toFixed(2)}%
          </Text>
          <Text style={{ color: priceChangeColor7d }}>
            {item.price_change_percentage_7d_in_currency.toFixed(2)}%
          </Text>
          <Text style={{ color: priceChangeColor14d }}>
            {item.price_change_percentage_14d_in_currency.toFixed(2)}%
          </Text>
          <Text style={{ color: priceChangeColor30d }}>
            {item.price_change_percentage_30d_in_currency.toFixed(2)}%
          </Text>
          <Text style={{ color: priceChangeColor1y }}>
            {item.price_change_percentage_1y_in_currency.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={styles.CryptoDetailsArea}>
        <View style={styles.CryptoDetails}>
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>Market Cap Rank:</Text>
            <Text style={styles.CryptoDetailText2}>
              #{item.market_cap_rank}
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>Market Cap:</Text>
            <Text style={styles.CryptoDetailText2}>${item.market_cap}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>Total Volume: </Text>
            <Text style={styles.CryptoDetailText2}>${item.total_volume}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>24h Highest:</Text>
            <Text style={styles.CryptoDetailText2}>${item.high_24h}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>24h Lowest:</Text>
            <Text style={styles.CryptoDetailText2}>${item.low_24h}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>Ciculating Supply:</Text>
            <Text style={styles.CryptoDetailText2}>
              ${item.circulating_supply}
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
          <View style={styles.CryptoDetailTextArea}>
            <Text style={styles.CryptoDetailText1}>Total Supply:</Text>
            <Text style={styles.CryptoDetailText2}>${item.total_supply}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  Header: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  PriceArea: {
    flex: 1,
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ChartArea: {
    display: "flex",
    flex: 4.5,
    backgroundColor: "white",
    justifyContent: "center",
    padding: "2%",
    paddingTop: "5%",
    marginBottom: "3%",
    marginHorizontal: "3%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  CryptoInfo: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Image: {
    width: 30,
    height: 30,
    marginHorizontal: 7,
  },
  CryptoTextArea1: {
    flex: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  CryptoTextArea2: {
    flex: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "5%",
    borderTopRightRadius: 20,
  },
  ImageArea: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
  },
  Text1: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },
  About: {
    flex: 2,
    backgroundColor: "red",
  },
  CryptoDetailsArea: {
    flex: 4.2,
    backgroundColor: "#efefef",
    justifyContent: "center",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
  CryptoDetails: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  CryptoDetailTextArea: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  CryptoDetailText1: {
    fontSize: 15,
    color: "gray",
  },
  CryptoDetailText2: {
    fontSize: 15,
    color: "black",
  },
  Chart: {
    flex: 4,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  Buttons: {
    flex: 0.7,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 0,
    padding: 5,
  },
  Changes: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    marginHorizontal: "5%",
    marginBottom: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ChangeTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  ChangeBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});
