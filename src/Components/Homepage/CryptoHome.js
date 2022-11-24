import { useState } from "react"


export const CryptoHome = () => {

const [cryptoState, setCryptoState] = useState([])

const fetchData = async () => {
    const response = await fetch(`http://localhost:8088/serviceTickets`)
    const ticketArray = await response.json()
    setTickets(ticketArray)
}
fetchData()
}