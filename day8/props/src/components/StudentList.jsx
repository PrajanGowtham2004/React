import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map(({ id, name, course }) => (
        <p key={id}>
          {id} - {name} - {course}
        </p>
      ))}
    </div>
  );
};

export default StudentList;