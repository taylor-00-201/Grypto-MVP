// this is a CRUD function to delete our coin data from json server by its coin id which is passed in through props
export const Delete = (props) => {
  console.log(props.coinId);
  const deleteRequest = async () => {
    const fetchOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const onDeleteCallback = props.onDeleteCallback;

    await fetch(
      `http://localhost:8088/SavedCrypto/${props.coinId}`,
      fetchOptions
    );
    onDeleteCallback();
  };

  return <button onClick={() => deleteRequest()}>Delete Coin</button>;
};
