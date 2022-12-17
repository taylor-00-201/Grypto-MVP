import { useEffect, useState } from "react";

export const UserAccounts = () => {
  const [account, setAccount] = useState([]);
  const [initialAccount, setInitialAccount] = useState([]);

  const userLocal = JSON.parse(localStorage.getItem("crypto_user"));

  useEffect(() => {
    fetch(`http://localhost:8088/user`).then((response) =>
      response.json().then((users) => {
        console.log(users);

        const currentUser = users.filter((user) => user.id === userLocal.id)[0];
        setAccount(currentUser);
        setInitialAccount(currentUser);
      })
    );
  }, []);

  const userPut = async () => {
    const userId = account.id;
    console.log(account);
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    };
    await fetch(`http://localhost:8088/user/${userId}`, fetchOptions);
  };

  return (
    <div className="bg-blue-600" key={initialAccount.email}>
      <h1 className="bg-pink-600">User Email: {initialAccount.email}</h1>
      <h1 className="bg-pink-600">Name: {initialAccount.fullName}</h1>

      <label className="flex-wrap p-5 m-4">Email</label>
      <input className="bg-green-600"
        value={account.email}
        autoFocus
        onChange={(event) => {
          const copy = { ...account };
          copy.email = event.target.value;
          setAccount(copy);
        }}
      />
      <label className="flex-wrap p-5 m-4">Full Name</label>
      <input className="bg-green-600"
        autoFocus
        value={account.fullName}
        onChange={(event) => {
          const copy = { ...account };
          copy.fullName = event.target.value;
          setAccount(copy);
        }}
      />
      <button className="bg-purple-900" onClick={userPut}>Save</button>
    </div>
  );
};
