// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllCoinsView } from "./AllCoinsView";
import { DataAPIUpdate } from "./DataAPIUpdate";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);

  const navigate = useNavigate;

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/tickers/`).then((response) =>
      response.json().then((data) => {
        const coinData = data.data.map((coin) => ({
          coinName: coin.name,
          coinPrice: coin.price_usd,
        }));
        setData(coinData);
      })
    );
    // do api call here to retrieve the user's coins
    // const userData = apiCallToGetData
    // setSelectedCoins(userData);
  }, []);

  const mySelectChange = (event) => {
    const coinValue = event.target.value;
    setSelectedCoins(...selectedCoins, coinValue);
  };

  console.log(selectedCoins);

  return (
    <div>
      <header>Your Coins</header>
      <div>
        <DataAPIUpdate />
      </div>
      <div>
        <select onChange={mySelectChange}>
          {data.map((coin) => (
            <option value={coin.coinName} key={coin.coinName}>
              {coin.coinName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

//recreate component (coin display)

//map over selected component for every one of my selected coins
