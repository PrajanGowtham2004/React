import React, { useState } from 'react'

const App = () => {
  // Task 1
  const [heroes, setHeroes] = useState(["Vijay", "Ajith", "Suriya"]);

  const changeHero = () => {
    setHeroes(["Vijay", "SK", "Suriya"]);
  };

  //Task 2
  const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

  const updateFruit = () => {
    setFruits(["Apple", "Banana", "Mango"]);
  };


  //Task 3
  const [student, setStudent] = useState({
    name: "Prajan",
    course: "JS",
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "React",
    });
  };

  //Task 4
  const [companies, setCompany] = useState({
    company: "Google",
    city:"Chennai"
  });
  const updateCompany = () => {
    setCompany({
      ...companies,
      company: "Microsoft",
    });
  };

  



  return (
    <>

   <div className="p-4 bg-blue-100 m-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Task 1</h2>

      {heroes.map((hero, index) => (
        <div key={index} className="bg-gray-200 p-2 m-1 rounded">
          {hero}
        </div>
      ))}

      <button
        onClick={changeHero}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Change Hero
      </button>
    </div>


    <div className="p-4 bg-blue-100 m-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Task 2</h2>

      {fruits.map((fruit, index) => (
        <div key={index} className="bg-gray-200 p-2 m-1 rounded">
          {fruit}
        </div>
      ))}

      <button
        onClick={updateFruit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Update Fruit
      </button>
    </div>


    <div className="p-4 bg-blue-100 m-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Task 3</h2>
      <div className="bg-gray-200 p-4 m-1 rounded">
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
      </div>

      <button
        onClick={updateCourse}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Update Course
      </button>
    </div>


    <div className="p-4 bg-blue-100 m-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Task 4</h2>
      <div className="bg-gray-200 p-4 m-1 rounded">
        <p>Company: {companies.company}</p>
        <p>City: {companies.city}</p>
      </div>

      <button
        onClick={updateCompany}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Update Company
      </button>
    </div>


    </> 
  )
}

export default App