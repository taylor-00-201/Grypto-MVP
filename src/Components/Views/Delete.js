export const Delete = (coinId, onDeleteCallback) => {
  const deleteRequest = async () => {
    const fetchOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(`http://localhost:8088/SavedCrypto?id=${coinId}`, fetchOptions);
    onDeleteCallback();
  };

  return <button onClick={() => deleteRequest()}>Delete Coin</button>;
};
