/*import { Homepage } from "./Homepage";

export const Form = ({ cryptoData, updateCryptoData }) => {
  console.log(cryptoData);

  const submitCrypto = () => {
        
      
          const apiPost = async () => {
            const fetchOptions = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            };
        
            await fetch(`http://localhost:8088/savedCrypto`, fetchOptions);
          }
    }

    const cryptoFormSelect = cryptoData.map((crypto, i) => (
      <section className="crypto" key={g}>
        <header>Select Coin</header>
        <select><div>{crypto.name}</div></select>
      
      </section>
    ));

  return (
    <form>
      {cryptoData.map((crypto, g) => <div> key={g}</div>}
      <header>Select Your Coin</header>
      <div>
        <select>

        </select>
      </div>

      <button onClick={submitCrypto}></button>
    </form>
  )*/