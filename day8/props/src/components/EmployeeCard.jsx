import React from "react";

const EmployeeCard = ({ employee }) => {
  const { name, email, city, experience } = employee;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>City : {city}</p>
      <p>Experience : {experience}</p>
    </div>
  );
};

export default EmployeeCard;