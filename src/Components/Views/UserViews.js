import { useState } from "react"

export const UserViews = () => {

        const [apiState, setApiState] = useState([])
        
        const fetchApiFunc = () => {
            fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`)
                .then (response => response.json())
                .then ((response) => {
                 const apiArray = response
                    setApiState(apiArray)
                   console.log(apiState)
                })
             }

             fetchApiFunc()

             const jsxApi = apiState

     return(
        <p>{jsxApi}</p>
        )
        
}