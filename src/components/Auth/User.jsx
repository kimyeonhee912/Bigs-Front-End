import React from "react";

export const User = () => {
  return (
    <>
      <h2>User Information</h2>
      <div className="info-box">
        <p>
          <strong>ID:</strong> user123
        </p>
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <button className="button log-out">Log Out</button>
      </div>
    </>
  );
};
