import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// this is Nashville Software School provided code provided as part of my E20 class capstone project to log in a user
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
    <html className="h-screen text-black text-5xl m-1 font-serif italic shadow-lg bg-blue-400">
      <head>
        <meta
          charset="UTF-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        <main>
          <section>
            <form className="form--login" onSubmit={handleLogin}>
              <h1>Welcome to Grypto</h1>
              <h2 className="text-white p-2 m-2">Please sign in</h2>
              <fieldset>
                <label htmlFor="inputEmail"> Enter Email address </label>
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
                <button className="border-2 p-2 m-5 bg-yellow-400" type="submit">Sign in</button>
              </fieldset>
            </form>
          </section>
          <section>
            <Link className="border-2 p-2 m-5 bg-yellow-400" to="/register">Not a member yet?</Link>
          </section>
        </main>
      </body>
    </html>
  );
};
