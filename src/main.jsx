import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider.jsx";
import ThemProvider from "./provider/ThemProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemProvider>
        <Router>
          <App />
        </Router>
      </ThemProvider>
    </AuthProvider>
  </StrictMode>
);
