import React from "react";

const App = () => {
   
  const course = "React JS";

   
  const price = 50000;
  const discount = 5000;

   
  const isLogin = true;

   
  const profileImage = null;

  
  const email = undefined;

   
  const getCompanyName = () => {
    return "Google";
  };

  
  const heroes = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"];

  
  const employee = {
    name: "Prajan",
    course: "React",
    experience: "1 Year",
  };

   
  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Kumar", course: "Python" },
    { id: 3, name: "Rahul", course: "Java" },
  ];

   
  const companyName = "Infosys";
  const totalEmployees = 10000;
  const isHiring = true;

  const CEO = {
    name: "Salil Parekh",
    age: 60,
  };

  const departments = ["HR", "IT", "Finance", "Marketing"];

  const employees = [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "David", role: "Tester" },
    { id: 3, name: "Sam", role: "Manager" },
  ];

  const getLocation = () => {
    return "Chennai";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          React Rendering Methods Assignment
        </h1>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 1 - String Rendering
          </h2>
          <h1 className="text-3xl font-semibold">{course}</h1>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 2 - Number Rendering
          </h2>
          <p className="text-lg">Price: ₹{price}</p>
          <p className="text-lg">Discount: ₹{discount}</p>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 3 - Boolean Rendering
          </h2>
          <h3 className="text-xl font-semibold text-green-600">
            {isLogin ? "Welcome User" : "Please Login"}
          </h3>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 4 - Null Rendering
          </h2>
          <p>{profileImage ? "Image Available" : "No Image Found"}</p>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 5 - Undefined Rendering
          </h2>
          <p>{email ? email : "Email Not Available"}</p>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 6 - Function Rendering
          </h2>
          <p className="text-lg font-semibold">{getCompanyName()}</p>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 7 - Array Rendering
          </h2>
          <ul className="list-disc pl-6">
            {heroes.map((hero, index) => (
              <li key={index}>{hero}</li>
            ))}
          </ul>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            Task 8 - Object Rendering
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-72">
            <p>
              <span className="font-semibold">Name:</span> {employee.name}
            </p>
            <p>
              <span className="font-semibold">Course:</span> {employee.course}
            </p>
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {employee.experience}
            </p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Task 9 - Array of Objects Rendering
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white border rounded-xl shadow-md p-5 hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {student.name}
                </h3>
                <p>ID: {student.id}</p>
                <p>Course: {student.course}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Task 10 - Mixed Rendering
          </h2>

          <p>
            <span className="font-semibold">Company Name:</span>{" "}
            {companyName}
          </p>

          <p>
            <span className="font-semibold">Total Employees:</span>{" "}
            {totalEmployees}
          </p>

          <p>
            <span className="font-semibold">Hiring Status:</span>{" "}
            {isHiring ? "Hiring" : "Not Hiring"}
          </p>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              CEO Details
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-72">
              <p>Name: {CEO.name}</p>
              <p>Age: {CEO.age}</p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Departments
            </h3>

            <ul className="list-disc pl-6">
              {departments.map((dept, index) => (
                <li key={index}>{dept}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              Employees
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow"
                >
                  <h4 className="font-bold text-lg">{emp.name}</h4>
                  <p>ID: {emp.id}</p>
                  <p>Role: {emp.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-red-600">
              Company Location
            </h3>
            <p>{getLocation()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;