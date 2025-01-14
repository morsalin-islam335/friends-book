/* eslint-disable react/prop-types */
import { AuthContext } from "../context";
import useLocalStorage from "./../hooks/useLocalStorage";
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage("auth", {});
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
