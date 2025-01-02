import LogOutIcon from "../../assets/icons/logout.svg";

import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
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
