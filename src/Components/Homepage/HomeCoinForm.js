import { CryptoHome } from "./CryptoHome";
import React, { useState } from "react";

const [coinFormState, setCoinFormState] = useState()

function coinSubmit() {
  
  preventDefault();

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  updateCryptoData()

  await updateCryptoData(), fetchOptions);

  navigate('/products');
};

function CoinForm({ singleCoin }) {
  return (
    <div className="">
       <form>
        <h1>Select Your Coin</h1>
        <option onClick={updateCryptoData}>coin {singleCoin.name}</option>
        <button onClick={}>Select Coin</button>
       </form>
    </div>
  );
}

export default CoinContainer;
