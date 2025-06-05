import axios from "axios";
import moment from "moment";

const formatSparkline = (numbers) => {
  const sevenDaysAgo = moment().subtract(7, "days").unix();
  let formattedSparkline = numbers.map((item, index) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });
  return formattedSparkline;
};

const formatMarketData = (data) => {
  let formattedMarketData = [];
  data.forEach((item) => {
    const formattedSparklineData = formatSparkline(item.sparkline_in_7d.price);
    const formattedItem = {
      ...item,
      sparkline_in_7d: {
        price: formattedSparklineData,
      },
    };
    formattedMarketData.push(formattedItem);
  });
  return formattedMarketData;
};

export const getMarketData = async () => {
  ///https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
  );
  const data = response.data;
  const formattedResponse = formatMarketData(data);
  return formattedResponse;
  try {
  } catch (error) {
    console.log(error.message);
  }
};
