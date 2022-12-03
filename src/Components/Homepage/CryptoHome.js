import { useEffect, useState } from "react";
import CoinContainer from "./HomeDashboard";

export const CryptoHome = ({ coinData, setCoinData }) => {
  const [cryptoMainState, setCryptoState] = useState([]);
  const [cryptoMainStateFilter, setCryptoStateFilter] = useState([]);

  const filteredData = cryptoMainStateFilter;

  useEffect(() => {
    updateCryptoData();
  }, []);

  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => setCoinData(data));
    console.log(coinData);
  };

  return (
    <div>
      <header>Your Coins</header>
      <button onClick={updateCryptoData}>Click Me!</button>
      {coinData === null ? null : (
        <div>
          <CoinContainer singleCoin={coinData.data[0]} />
          <CoinContainer singleCoin={coinData.data[1]} />
        </div>
      )}


    
    </div>
  );
};
