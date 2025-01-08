import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Profile />} path="/me" />
        </Route>

        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<RegistrationPage />} path="/register"></Route>
        <Route element={<NotFoundPage />} path="*"></Route>
      </Routes>
    </>
  );
}
