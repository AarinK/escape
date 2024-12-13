import React from "react";
import { FaHeart } from "react-icons/fa"; // Importing a heart icon for a love theme

const FinalRoom = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFB6C1, #FFC0CB)", // Soft pink gradient
        fontFamily: "'Roboto', sans-serif",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 10px rgba(255, 105, 180, 0.7)",
        }}
      >
        Congratulations!
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "30px",
          letterSpacing: "1px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        You’ve solved all the puzzles and found the keepsake! 🎁
        <br />
        Your love is truly magical. Here's to many more memories together.
      </p>
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "30px",
          animation: "heartbeat 1.5s infinite",
        }}
      >
        <FaHeart style={{ color: "#FF69B4" }} />
      </div>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "20px",
          color: "#FF1493",
          fontStyle: "italic",
        }}
      >
        Happy Anniversary Meri Baby Sabse Pyaari Shonzu Thank You For Everything! 💖
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        
        
      </div>

      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1);
            }
            75% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FinalRoom;
