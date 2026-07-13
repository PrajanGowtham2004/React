import React from "react";
import StudentCards from "./components/StudentCards";
import EmployeeCard from "./components/EmployeeCard";
import StudentList from "./components/StudentList";


const App = () => {
const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Chennai",
    experience: "3 Years",
  };

  
  const students = [
    { id: 1, name: "Sudhan", course: "React" },
    { id: 2, name: "Rahul", course: "MERN" },
    { id: 3, name: "Vijay", course: "Node" },
    { id: 4, name: "Kumar", course: "Angular" },
    { id: 5, name: "Arun", course: "Python" },
  ];

  return (
    <>
    <div>
      <h1>Task 1 - Primitive Props</h1>
      <StudentCards
        name="Sudhan"
        age={25}
        course="React"
        isPlaced={true}
      />

      <hr />

      <h1>Task 2 - Object Props</h1>
      <EmployeeCard employee={employee} />

      <hr />

      <h1>Task 3 - Array Of Objects Props</h1>
      <StudentList students={students} />
    </div>
    </>
  );
};

export default App;