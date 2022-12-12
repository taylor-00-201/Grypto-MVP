import { useEffect, useState } from "react";

export const DataAPIUpdate = () => {
  const [cryptoData, setCryptoData] = useState(null);

  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => setCryptoData(data));
  };

  const apiDataVar = cryptoData;

  const handleCryptoDataUpdate = (data) => {
    apiPost(apiDataVar)
    setCryptoData(apiDataVar);
  };

  const apiPost = async (apiDataVar) => {
    apiDataVar.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetch),
    };

    await fetch(`http://localhost:8088/crypto`, fetchOptions);
  };

  const appTrue = true;

  return <button onClick={() => handleCryptoDataUpdate()}>Click To Update</button>;
};

 
