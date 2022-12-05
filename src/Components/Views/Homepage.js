// git api call from saved crypto and then populate the return HTML from that call
// same thing as the dataview but this is calling to the saved crypto database
// create json server database
import { AllCoinsView } from "./AllCoinsView";

export const Homepage = ({ cryptoData, updateCryptoData }) => {
  return (
    <div>
      <header>Your Coins</header>
      <button onClick={() => updateCryptoData()}>Click Me!</button>
      {cryptoData === null ? null : (
        <div>
          <div>
            {JSON.stringify(cryptoData)}
            {/* <AllCoinsView multipleCoins={cryptoData.data} /> */}
          </div>
        </div>
      )}
    </div>
  );
};
