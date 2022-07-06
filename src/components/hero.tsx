import React from "react";
import Button from "react-bootstrap/Button";

export const Hero = () => {
  return (
    <div
      className="container-fluid d-flex flex-column align-content-center justify-content-center align-items-center"
      style={{ backgroundColor: "rgb(78,91,230)", height: "80vh" }}
    >
      <div className="flex-row">
        <h1 className="text-white text-center">
          Start Your Online Marketing <br />
          With Nitu Solution
        </h1>
      </div>

      <div className="flex-row mt-5">
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="link">Light</Button>{" "}
      </div>
    </div>
  );
};
