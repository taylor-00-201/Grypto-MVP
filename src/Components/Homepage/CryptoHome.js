import { useState } from "react";

export const CryptoHome = () => {
  const [cryptoState, setCryptoState] = useState([]);

  const fetchData = async () => {
    const response = await fetch(``);
    const ticketArray = await response.json();
  };
};
