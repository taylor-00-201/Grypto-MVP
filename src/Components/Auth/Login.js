import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, set] = useState("taylor00201@gmail.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/user?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "crypto_user",
            JSON.stringify({
              id: user.id,
              email: user.email,
              cryptoIds: user.cryptoIds,
            })
          );

          navigate("/Cryptohome");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <main className="container--login ">
      <section className="bg-green-700 text-black-500 text-5xl m-1 font-serif italic shadow-lg">
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Grypto</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
