import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserAccounts = () => {
  // component state
  const [account, setAccount] = useState([]);
  const [initialAccount, setInitialAccount] = useState([]);

  const userLocal = JSON.parse(localStorage.getItem("crypto_user"));
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

  // this fetches the users from the api, if the user matches the value associated with the key from local storage as our user, that current user is passed into component state
  useEffect(() => {
    fetch(`http://localhost:8088/user`).then((response) =>
      response.json().then((users) => {
        const currentUser = users.filter((user) => user.id === userLocal.id)[0];
        setAccount(currentUser);
        setInitialAccount(currentUser);
      })
    );
  }, []);

  // this is a function to update the data in json server
  const userPut = async () => {
    const userId = account.id;
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
    // this is the returned jsx
    <div
      className="h-screen bg-blue-400 text-black-500 text-5xl m-1 font-serif italic shadow-lg"
      key={initialAccount.email}
    >
      <h1 className="bg-yellow-400 outline-black text-5xl p-2">
        User Email: {initialAccount.email}
      </h1>
      <h1 className="bg-yellow-400 outline-black text-5xl p-2">
        Name: {initialAccount.fullName}
      </h1>

      <label className="flex-wrap p-5 m-4 outline-black p-2">Email</label>
      <input
        className="bg-white outline-black m-4 p-2"
        value={account.email}
        autoFocus
        onChange={(event) => {
          const copy = { ...account };
          copy.email = event.target.value;
          setAccount(copy);
        }}
      />
      <label className="flex-wrap p-5 m-4 p-2">Full Name</label>
      <input
        className="bg-white p-2 m-4"
        autoFocus
        value={account.fullName}
        onChange={(event) => {
          const copy = { ...account };
          copy.fullName = event.target.value;
          setAccount(copy);
        }}
      />
      <button className="bg-yellow-400 outline-black m-4 p-2" onClick={userPut}>
        Save
      </button>
      <button
        className="bg-yellow-400 outline-black m-4 p-2"
        onClick={navigateHome}
      >
        Go Home
      </button>
    </div>
  );
};
