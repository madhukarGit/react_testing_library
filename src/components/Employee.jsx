import React from "react";
import Col from "react-bootstrap/Col";
export default function Employee({ firstName, lastName, email, imageUrl }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <div className="images__flex">
        <img
          style={{ width: "50%" }}
          src={imageUrl}
          alt={`${firstName} hero`}
        />
        <span className="display__block_name">
          {firstName} {lastName}
        </span>
      </div>
    </Col>
  );
}
