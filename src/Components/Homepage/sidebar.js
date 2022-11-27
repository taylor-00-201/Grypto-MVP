import { Form } from "react-router-dom";


export const CryptoHomeSb = () => {
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
        <form>
            
        </form>
    )
  };
  