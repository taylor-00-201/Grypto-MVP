export const DataAPIUpdate = () => {
  // this fetches the coin data from the API, calls the apiPost Function, and passes the data into said function for insertion into the back end
  const updateCryptoData = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        apiPost(data.data);
      });
  };
  // this is a post function to get the api dat into the JSON server backend
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
