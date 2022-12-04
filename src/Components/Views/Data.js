
import { useEffect, useState } from "react";

 const Data = () => {

  const [cryptoMainState, setCryptoState] = useState([]);
  
  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => setCryptoState(data));

      
;
  };

  useEffect(() => {
    updateCryptoData();
  }, []);

  const apiPost = async (statearr) => {
    statearr.preventDefault();
  
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cryptoMainState),
    };
  
    await fetch(`http://localhost:8088/crypto`, fetchOptions);
  };


  return(
    <button onClick={(cryptoMainStateApiInsert) => apiPost(cryptoMainStateApiInsert)}>Click To Update</button>
  )
}


