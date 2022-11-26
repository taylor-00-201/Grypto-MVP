import { Outlet, Route, Routes } from "react-router-dom"
import { Login } from "../Auth/Login"
import { Register } from "../Auth/Register"
import { CryptoHome } from "../Homepage/CryptoHome"



export const UserViews = () => {
	return (
      <div className="gryptoMain"> 
          <Routes>
            <Route path="login" element={ <Login/> }/>
            <Route path="Register" element={ <Register/> }/>
            <Route path="Cryptohome" element={ <CryptoHome/> }/>
          </Routes>
      </div>
   )
}