// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database

import { useEffect } from "react";
import { Data } from "../Views/Data";

export const Homepage = () => {
  const [homeData, setHomeData] = useEffect([]);

  useEffect(() => {
    setHomeData(cryptoMainState);
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
          <div>
            <CoinContainer singleCoin={coinData.data[0]} />
            <CoinContainer singleCoin={coinData.data[1]} />
          </div>

          <div>
            <CoinForm multipleCoins={coinData.data} />
          </div>
        </div>
      )}
    </div>
  );
};
