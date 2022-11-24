import { Outlet, Route, Routes } from "react-router-dom"



const userViews = () => {
	return (
      <div className="gryptoMain"> 
          <routes>
            <Route path="tickets" element={ <CryptoHome/> }
          </routes>
      </div>
   )
}