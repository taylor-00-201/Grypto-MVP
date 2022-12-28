// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataAPIUpdate } from "./DataAPIUpdate";
import { Delete } from "./Delete";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [jsonServerApiCoins, setjsonServerApiCoins] = useState([]);

  const userId = JSON.parse(localStorage.getItem("crypto_user")).id;

  const navigate = useNavigate();

  const postRequest = async (data) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(`http://localhost:8088/SavedCrypto`, fetchOptions);
  };

  const fetchCoins = () => {
    fetch(`http://localhost:8088/SavedCrypto`).then((response) =>
      response.json().then((data) => {
        const userCoins = data.filter((x) => x.userId === userId);
        setjsonServerApiCoins(userCoins);
      })
    );
  };

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

    fetchCoins();
    console.log(setjsonServerApiCoins);
  }, []);

  const mySelectChange = async (event) => {
    const coinValue = event.target.value;
    console.log(data);
    const selectedCoin = data.filter((coin) => coin.coinName === coinValue)[0];
    const user = JSON.parse(localStorage.getItem("crypto_user"));
    selectedCoin["userId"] = user.id;
    const updatedSelectedCoins = [...selectedCoins, selectedCoin];

    setSelectedCoins(updatedSelectedCoins);

    await postRequest(updatedSelectedCoins[updatedSelectedCoins.length - 1]);

    fetchCoins();
  };

  console.log(jsonServerApiCoins);

  const navigateFn = () => navigate("/account");
  const navigateLogout = () => navigate("/login");

  return (
    <div className="h-screen h-full bg-blue-400 text-black-500 text-5xl m-1 font-serif italic shadow-lg">
      <div>
        <div className="text-yellow-00">
          <DataAPIUpdate />
        </div>
      </div>

      <div>
        <button
          className="text-white text-2xl m-1 flex"
          onClick={navigateFn}
        >
          Account Details
        </button>
        <button
          className="text-white text-2xl m-1 flex"
          onClick={navigateLogout}
        >
          Logout
        </button>
      </div>

      <div>
        <h1 className="text-black text-8xl m-1 font-serif italic shadow-lg">
          Select Your Coin
        </h1>
        <select className="bg-yellow-400 text-blue-900" onChange={mySelectChange}>
          {data.map((coin) => (
            <option className="border-black"
              key={coin.coinName + coin.coinPrice + Math.random()}
              value={coin.coinName}
            >
              {coin.coinName}
            </option>
          ))}
        </select>

        <div className="border-2 p-2 m-5 flex-wrap p-10 box-border border-black flex">
          {jsonServerApiCoins.map((coin) => (
            <div
              className="border-black border-opacity-0 px-1 m-2 border-2"
              key={coin.coinName + coin.coinPrice + Math.random()}
            >
              <h1 className="bg-yellow-400 text-black text-5xl m-1">
                {coin.coinName}
              </h1>
              <h1 className="bg-white text-black text-3xl m-1 ">
                ($ {coin.coinPrice})
              </h1>
              <div className="text-black">
                <Delete coinId={coin.id} onDeleteCallback={fetchCoins} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//recreate component (coin display)

//map over selected component for every one of my selected coins
