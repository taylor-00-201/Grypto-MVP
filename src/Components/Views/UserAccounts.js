import { useEffect, useState } from "react";

export const UserAccounts = () => {
  const [accountState, setAccountState] = useState([]);

  const userLocal = JSON.parse(localStorage.getItem("crypto_user"));

  useEffect(() => {
    fetch(`http://localhost:8088/user`).then((response) =>
      response.json().then((data) => {
        const userData = data.map((user) => ({
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          isStaff: user.isStaff,
        }));
        setAccountState(userData);
        console.log(userData);
      })
    );

    console.log(accountState);
  }, []);

  const localFilter = accountState.map((user) => {
    if (user.id === userLocal.id) {
      return (
        <div key={user.email}>
          <input>User Email: {user.email}</input>
          <input>User Name: {user.fullName}</input>
        </div>
      );
    }
  });

  return <h1>{localFilter}</h1>;
};
