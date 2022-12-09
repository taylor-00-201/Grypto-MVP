// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllCoinsView } from "./AllCoinsView";
import { DataAPIUpdate } from "./DataAPIUpdate";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState([]);

  const navigate = useNavigate;

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/tickers/`).then((response) =>
      response.json().then((data) => {
        var coinData = data.data.map((coin) => ({
          coinName: coin.name,
          coinPrice: coin.price_usd,
        }));
        setData(coinData);
      })
    );
  }, []);

  console.log(data);

  return (
    <div>
      <header>Your Coins</header>
      <div>
        <DataAPIUpdate />
      </div>
      <div>
        <select>
          <option>{data.map((coinName) => )}</option>
        </select>
        <div className="coinDisplay">
          <h1>{selectedCoin.name}</h1>
          <h1>{selectedCoin.price_usd}</h1>
        </div>
      </div>
    </div>
  );
};
