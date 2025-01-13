import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../context";
import ProfileProvider from "../provider/ProfileProvider";
import useAuth from "./../hooks/useAuth";
import PostProvider from "./../provider/PostProvider";
import UpdatePostProvider from "./../provider/UpdatePostProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  console.log(darkMode);

  return (
    <>
      {auth.user ? (
        <ProfileProvider>
          <PostProvider>
            <UpdatePostProvider>
              <main
                className={`mx-auto max-w-[1020px] py-8 ${
                  darkMode
                    ? "bg-[#171923] text-white"
                    : "bg-[#F7F7F7] text-[#888888]"
                }`}
              >
                <div className="container">
                  <Header />
                  <Outlet />
                </div>
              </main>
            </UpdatePostProvider>
          </PostProvider>
        </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
