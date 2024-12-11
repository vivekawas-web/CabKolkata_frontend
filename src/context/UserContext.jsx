import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

function userContext({ children }) {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <div>
      <UserDataContext.Provider>{children}</UserDataContext.Provider>
    </div>
  );
}

export default userContext;
