import { useEffect, useState } from "react";

export const CryptoHome = () => {
  const [cryptoMainState, setCryptoState] = useState([]);

  useEffect(() => {
    const response = fetch(
      `https://api.coinlore.net/api/tickers/`,
      
    ).then((data) => {
      

      const pop = data.json()
      console.log(pop)
      setCryptoState(pop);
    });
  }, []);

  return (
    <div>
       <header></header>
       <coin-container coins={cryptoMainState.coins}></coin-container>
//     <sidebar><div className="coincalc"></div></sidebar>
//
    </div>
  );
};

// const cryproDash = ()  => {
//     <div>
//       <header></header>
//       <currency-calculator></currency-calculator>
//       <coin-container coins={cryptoMainState.coins}></coin-container>
//     </div>
// }
