import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import { Register } from "../Auth/Register";
import { Homepage } from "../Homepage/Homepage";
import { useState } from "react";
import { allCoinsView } from "../AllCoinsView/AllCoinsView";
import Data

export const UserViews = () => {
  const [globalState, setGlobalState] = useState(null);

  return (
    <div className="gryptoMain">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="allcoins" element={<allCoinsView />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};
