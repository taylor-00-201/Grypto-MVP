import { useEffect, useState } from "react";

export const DataAPIUpdate = () => {
  const [cryptoData, setCryptoData] = useState(null);

  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => handleCryptoDataUpdate(data));
  };

  const handleCryptoDataUpdate = (data) => {
    setCryptoData(data.data);
  };

  const appTrue = true;

  return <button onClick={() => updateCryptoData()}>Click To Update</button>;
};
