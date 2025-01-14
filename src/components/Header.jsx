import HomeIcon from "../assets/icons/home.svg";
import Notification from "../assets/icons/notification.svg";
// import Avatar from "../assets/images/avatars/avatar_1.png";
// import Avatar from "../assets/images/avatars/ProfilePicture.jpg";
import Avatar from "../assets/images/avatars/DefaultAvatar.jpg";
// import Logo from "../assets/images/logo.svg";
// import Logo from "../assets/icons/friendsBookLogo.svg";
import Logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import LogOut from "./auth/LogOut";

import { motion } from "motion/react";

const Header = () => {
  // const { state } = useProfile();
  // console.log("state from header from useProfile hook", state);
  const { auth } = useAuth();
  const authProfileIcon = `${import.meta.env.VITE_SERVER_BASE_URL}/${
    auth.user.avatar
  }`;

  const MotionLink = motion(Link);

  // console.log("auth profile from header", authProfileIcon);

  // console.log("auth from header", auth);
  return (
    <nav
      className={`sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4 `}
    >
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <MotionLink
          to="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            className="max-w-[60px] lg:max-w-[100px]"
            src={Logo}
            alt="logo"
          />
        </MotionLink>

        <div className="flex items-center space-x-4">
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/"
            className="btn-primary"
          >
            <img src={HomeIcon} alt="Home" />
            Home
          </MotionLink>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn"
          >
            <img src={Notification} alt="Notification" />
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LogOut />
          </motion.button>

          <MotionLink
            to="/me"
            className="flex-center !ml-8 gap-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-lg font-medium lg:text-xl">
              {auth?.user?.firstName} {auth?.user?.lastName}
            </span>

            {/* <img
              className="rounded rouned-full max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
              src={Avatar}
              alt="avatar"


            /> */}

            <img
              className="rounded-full h-[60px] w-[60px] lg:h-[44px] lg:w-[44px]"
              src={auth?.user?.avatar ? authProfileIcon : Avatar}
              alt="avatar"
            />
          </MotionLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
