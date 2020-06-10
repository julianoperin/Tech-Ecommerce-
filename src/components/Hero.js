import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Feel The Gaming Power!</h1>
        <p>Start playing right now...</p>
        {children}
      </div>
    </div>
  );
}
