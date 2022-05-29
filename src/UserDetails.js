import React from "react";
import { userType } from "./types/index";

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h1>{user.id}</h1>
    </div>
  );
};

// User function follows the userType data type
// if the data entered is not the same as its defined as
// a warning will be shown in the console
User.propTypes = {
  user: userType,
};

export default User;
