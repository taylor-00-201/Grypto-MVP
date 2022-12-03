import { CryptoHome } from "./CryptoHome";
import React from "react";

function CoinContainer({ singleCoin }) {
  return (
    <div className="ml-10 mb-2 border-x-2 border-red-600 bg-blue-300 p-3 w-48">
      <h3 className="italic font-bold text-3xl">Coin: {singleCoin.name}</h3>
      <h3>Coin Value is {singleCoin.price_usd}</h3>
    </div>
  );
}

export default CoinContainer;
