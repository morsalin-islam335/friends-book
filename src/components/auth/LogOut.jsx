import LogOutIcon from "../../assets/icons/logout.svg";

import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

import { toast } from "react-toastify";

const LogOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    toast.success("Logout Successfull!", {
      position: "top-right", // Positioning the toast at the top-right
      autoClose: 2000, // Auto close after 2 seconds
    });
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
