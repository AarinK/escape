import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Icon for the Start button

const WelcomePage = () => {
  const navigate = useNavigate(); // Hook to navigate to the /entryway

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(135deg, #FFD1DC, #FFB6C1)", // Soft pink gradient
        fontFamily: "'Roboto', sans-serif",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "3px 3px 15px rgba(255, 182, 193, 0.8)",
        }}
      >
        Welcome to Your Anniversary Escape Room!
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
        Your journey of love and puzzles begins here. Solve the mysteries and
        celebrate your special day. Let the adventure begin!
      </p>
      
      <button
        onClick={() => navigate("/entryway")}
        style={{
          background: "#FF69B4", // Pink background
          border: "none",
          padding: "15px 40px",
          fontSize: "1.2rem",
          color: "#fff",
          borderRadius: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(255, 105, 180, 0.6)",
          transition: "all 0.3s ease",
        }}
      >
        Start Your Journey
        <FaArrowRight style={{ marginLeft: "10px", fontSize: "1.5rem" }} />
      </button>
    </div>
  );
};

export default WelcomePage;
