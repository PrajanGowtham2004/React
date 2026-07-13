import React from "react";

const StudentCards = ({ name, age, course, isPlaced }) => {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>Age : {age}</h2>
      <h2>Course : {course}</h2>
      <h2>Status : {isPlaced ? "Placed" : "Not Placed"}</h2>
    </div>
  );
};

export default StudentCards;