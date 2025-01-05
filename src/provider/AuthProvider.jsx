import { useState } from "react";

import { AuthContext } from "../context";
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
