// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataAPIUpdate } from "./DataAPIUpdate";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [jsonServerApiCoins, setjsonServerApiCoins] = useState([]);

  const navigate = useNavigate();

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

    function jsonServerApiCoinsFetch() {
      fetch(`http://localhost:8088/SavedCrypto`).then((response) =>
        response.json().then((data) => setjsonServerApiCoins(data))
      );
    }

    jsonServerApiCoinsFetch();
    console.log(setjsonServerApiCoins);
  }, []);

  const mySelectChange = async (event) => {
    const coinValue = event.target.value;
    console.log(data);
    const selectedCoin = data.filter((coin) => coin.coinName === coinValue)[0];
    const updatedSelectedCoins = [...selectedCoins, selectedCoin];

    setSelectedCoins(updatedSelectedCoins);

    const mySelectApiPost = async () => {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSelectedCoins[0]),
      };

      await fetch(`http://localhost:8088/SavedCrypto`, fetchOptions);
    };

    function jsonServerApiCoinsFetchTwo() {
      fetch(`http://localhost:8088/SavedCrypto`).then((response) =>
        response.json().then((data) => setjsonServerApiCoins(data))
      );
    }

    await mySelectApiPost();
    jsonServerApiCoinsFetchTwo();
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
            <option value={coin.coinName}>{coin.coinName}</option>
          ))}
        </select>
        <div>
          {jsonServerApiCoins.map((coin) => (
            <div key={coin.coinName + coin.coinPrice}>
              <h1>{coin.coinName}</h1>
              <h1>{coin.coinPrice}</h1>
            </div>
          ))}
          <div className="delete">Delete Coin</div>
        </div>
      </div>
    </div>
  );
};

//recreate component (coin display)

//map over selected component for every one of my selected coins
