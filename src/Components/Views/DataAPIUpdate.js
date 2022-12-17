export const DataAPIUpdate = () => {
  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        apiPost(data.data);
      });
  };

  const apiPost = async (data) => {
    console.log(data);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(fetchOptions);

    await fetch(`http://localhost:8088/crypto`, fetchOptions);
  };

  return <button onClick={updateCryptoData}>Click To Update</button>;
};
