import { Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import { Register } from "../Auth/Register";
import { Homepage } from "./Homepage";
import { Form } from "./Form";
import { Account } from "./Account";

export const UserViews = () => {
  return (
    <div className="gryptoMain">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="allcoins" element={<allCoinsView />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};
