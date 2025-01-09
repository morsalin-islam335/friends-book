import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "./../hooks/useAuth";
import PostProvider from "./../provider/PostProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      {auth.user ? (
        <PostProvider>
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Header />
              <Outlet />
            </div>
          </main>
        </PostProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
