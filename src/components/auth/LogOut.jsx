import LogOutIcon from "../../assets/icons/logout.svg";

import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const LogOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({}); // set auth with an empty object.
    navigate("/login");
  };
  return (
    <>
      <button onClick={handleLogout}>
        <img src={LogOutIcon} alt="logout icon" />
      </button>
    </>
  );
};

export default LogOut;
