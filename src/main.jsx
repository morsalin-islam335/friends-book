// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { BrowserRouter as Router } from "react-router-dom";
// import AuthProvider from "./provider/AuthProvider.jsx";
// import ThemProvider from "./provider/ThemProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <ThemProvider>
//         <Router>
//           <App />
//         </Router>
//       </ThemProvider>
//     </AuthProvider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider.jsx";
import ThemProvider from "./provider/ThemProvider.jsx";

// Import ToastContainer and its CSS
import { AnimatePresence } from "motion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemProvider>
        <AnimatePresence>
          <Router>
            <App />
            {/* Add ToastContainer here */}
            <ToastContainer />
          </Router>
        </AnimatePresence>
      </ThemProvider>
    </AuthProvider>
  </StrictMode>
);
