import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../Components/ListItem";
import { SAMPLE_DATA } from "../Files/sampleData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { getMarketData } from "../Services/cryptoService";

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);
  const navigation = useNavigation();
  const openPage = (item) => {
    setSelectedCoinData(item);
    console.log(selectedCoinData);
    navigation.navigate("Crypto", { item });
  };

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.TitleArea}>
        <Text style={styles.Title}>Prices</Text>
      </View>
      <View style={styles.Prices}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol.toUpperCase()}
              currentPrice={item.current_price}
              PriceChangePercentage={item.price_change_percentage_7d_in_currency.toFixed(
                2
              )}
              logoUrl={item.image}
              onPress={() => openPage(item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  TitleArea: {
    flex: 1,
    backgroundColor: "#efefef",
    marginTop: "10%",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  Prices: {
    flex: 9,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
});
