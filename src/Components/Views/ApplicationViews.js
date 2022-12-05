import { UserViews } from "./UserViews.js";
import { useState } from "react";

export const ApplicationViews = () => {
  /*const localUser = localStorage.getItem("project_user");
  const userObject = JSON.parse(localUser);*/
  const [cryptoData, setCryptoData] = useState(null);

  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => handleCryptoDataUpdate(data));
  };
  
  const handleCryptoDataUpdate = (data) => {
    apiPost(data);
    setCryptoData(data);
  };

  const apiPost = async (data) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(`http://localhost:8088/crypto`, fetchOptions);
  }

 
  const appTrue = true;

  if (appTrue) {
    return <UserViews cryptoData={cryptoData} updateCryptoData={updateCryptoData} />;
  }
};
