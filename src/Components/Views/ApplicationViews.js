import { UserViews } from "./UserViews.js";
import { useState } from "react";

export const ApplicationViews = () => {
  /*const localUser = localStorage.getItem("project_user");
  const userObject = JSON.parse(localUser);*/

  const appTrue = true;

  if (appTrue) {
    return <UserViews />;
  }
};
