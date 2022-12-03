import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import { Register } from "../Auth/Register";
import { CryptoHome } from "../Homepage/CryptoHome";
import { useState } from "react";

export const UserViews = () => {
  const [coinData, setCoinData] = useState(null);

  return (
    <div className="gryptoMain">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route
          path="*"
          element={<CryptoHome coinData={coinData} setCoinData={setCoinData} />}
        />
      </Routes>
    </div>
  );
};
