import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export default function LoadingScreen() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show the logo after a delay (e.g., 2 seconds)
    const timer = setTimeout(() => setShowLogo(true), 2000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#2C2C2C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {!showLogo ? (
        <p
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Loading...
        </p>
      ) : (
        <img
          src={logo}
          alt="Loading..."
          style={{
            width: "150px",
            height: "150px",
            animation: "spin 2s linear infinite",
          }}
        />
      )}

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
