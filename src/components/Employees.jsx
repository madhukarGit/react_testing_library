import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";
import Row from "react-bootstrap/Row";

export default function Employees() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/org/employees").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);
  const dataComponent = data.map((emp) => (
    <Employee
      key={emp.id}
      firstName={emp.firstName}
      lastName={emp.lastName}
      email={emp.email}
      imageUrl={emp.image}
    />
  ));
  return <Row>{dataComponent}</Row>;
}
