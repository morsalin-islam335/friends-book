import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "./../hooks/useAuth";
import PostProvider from "./../provider/PostProvider";
import ProfileProvider from "../provider/ProfileProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      {auth.user ? (
        <ProfileProvider>
          <PostProvider>
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Header />
                <Outlet />
              </div>
            </main>
          </PostProvider>
        </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
