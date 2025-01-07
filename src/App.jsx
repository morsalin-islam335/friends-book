import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoute";
import ProfileProvider from "./provider/ProfileProvider";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<Profile />} path="/me" />
        </Route>

        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<RegistrationPage />} path="/register"></Route>
        <Route element={<NotFoundPage />} path="*"></Route>
      </Routes>
    </>
  );
}
