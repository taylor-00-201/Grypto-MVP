import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AllCoinsView = () => {
  // this is the component state
  const [allCoinsFetch, setAllCoinsFetch] = useState([]);

  // these variables use the usenavigate hook to naivgate to a dffernt url, this is for the buttions on the page
  const navigate = useNavigate();
  const navigateFn = () => navigate("/account");
  const navigateLogout = () => navigate("/login");
  const navigateAllCoins = () => navigate("/allcoins");
  const homeNavigate = () => navigate("/Cryptohome");

  // this is the useeffect for the fetch to json server, it takes the returned json and sets that as the component's state
  useEffect(() => {
    fetch(`http://localhost:8088/crypto`).then((response) =>
      response.json().then((data) => {
        const allCoinData = data.map((coin) => ({
          coinName: coin.name,
          coinId: coin.id,
          coinPrice: coin.price_usd,
          name: coin.nameid,
          change24hr: coin.percent_change_24h,
          change7Day: coin.percent_change_7d,
          usdMarketCap: coin.market_cap_usd,
        }));
        setAllCoinsFetch(allCoinData);
      })
    );
  }, []);

  console.log(allCoinsFetch);

  //this function allows the user to download the json from the browser, it fetches data from the back end, converts the json into a blob object, creates an <a> html element
  //then it sets the href property of <a> to URL.createObjectUrl, the blob object is taken as an argument and creates a temporary URL to download the data
  const DownloadJson = () => {
    fetch(`http://localhost:8088/crypto`).then((response) => {
      response.blob().then((dataBlob) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(dataBlob);
        console.log(URL.createObjectURL(dataBlob));
        downloadLink.download = "api.json";
        downloadLink.click();
      });
    });
  };

  <button onClick={DownloadJson}>Download Json Here</button>;

  return (
    // this is the nagivation and html aspects of th page, the css is handled by tailwind
    <div className="flex flex-wrap bg-blue-400">
      <div className="flex text-4xl p-5 m-5 border-2">
        <button className="text-black m-1 flex" onClick={navigateFn}>
          Account Details
        </button>
        <button className="text-white m-1 flex" onClick={navigateLogout}>
          Logout
        </button>
        <button className="text-black m-1 flex" onClick={navigateAllCoins}>
          All Coins
        </button>
        <button className="text-white m-1 flex" onClick={homeNavigate}>
          Crypto Home
        </button>
        <button className="text-black m-1 flex" onClick={DownloadJson}>
          Download Json Here
        </button>
      </div>

      {allCoinsFetch.map((coin) => {
        return (
          // this uses state to populate the html elements by using the map method
          <div
            className="border-solid border-2 border-black p-8 m-2 bg-yellow-400 text-black"
            key={coin.coinName + coin.coinPrice + Math.random()}
          >
            <h1>Coin Name: {coin.coinName}</h1>
            <h1>ID: {coin.coinId}</h1>
            <h1>Price USD: ${coin.coinPrice}</h1>
            <h1>Change: 24Hr: {coin.change24hr}</h1>
            <h1>Change 7 Day: {coin.change7Day}</h1>
            <h1>Market Cap: {coin.usdMarketCap}</h1>
          </div>
        );
      })}
    </div>
  );
};

//test driven development look up
