import React, { useState } from 'react'

const App = () => {
  // Task 1 - Counter
  let [array, setArray] = useState([1, 2, 3, 4, 5])
   console.log(array)

  const handleClick = () => {
    setArray([...array, array.length + 1])
   }



   //Task 2 - Name Change
   let [name, setName] = useState("Prajan")
   const handleNameChange =()=>{
    setName("Prajan Gowtham S")

   }


  //Task 3 - Login Status
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogIn = () =>{
    setIsLoggedIn(!isLoggedIn)
  }


  //Task 4 - Theme Status
  let [theme, setTheme] = useState(false)
  const handleTheme =  () => {
    setTheme(!theme)
  }





  return (
    <>
    <div className=" p-4 m-4 bg-amber-100 rounded-2xl">
    <h2 className="text-2xl font-bold p-4">Task 1 - Counter</h2>

    <div className="flex flex-wrap items-center justify-center">
      
      {array.map((e,i) => (
        <span key={i+1} className="bg-gray-200 p-2 m-2  rounded">
          {e}
        </span>
      ))}
    </div>
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 m-2  mt-4 rounded ">
      Add Item
    </button>
    </div>


    <div className=" p-4 m-4 bg-amber-100 rounded-2xl">
      <h2 className="text-2xl font-bold p-4">Task 2 - Name Change</h2>
    <p className="text-xl font-semibold p-4">{name}</p>
    <button  onClick={handleNameChange} className="bg-green-500 text-white px-4 py-2 m-2  mt-4 rounded ">
      Change Name
    </button>
    </div>



    <div className=" p-4 m-4 bg-amber-100 rounded-2xl">
      <h2 className="text-2xl font-bold p-4">Task 3 - Login Status</h2>
      <p className="text-xl font-semibold p-4">{isLoggedIn? "Welcome User!" : "Please Login" }</p>
      <button onClick={handleLogIn} className="bg-purple-500 px-4 py-2 m-2 mt-4 rounded">{isLoggedIn ? "Logout" : "Login"}</button>

    </div>



    <div className=" p-4 m-4 bg-amber-100 rounded-2xl">
     <div className={` rounded p-3 ${theme ? "bg-black text-purple-400" : "bg-purple-500 "}`}>
       <h2 className="text-2xl font-bold p-4">Task 4 - Theme Status</h2>
       <button onClick={handleTheme} className ="bg-white px-4 py-2 m-2 mt-4 rounded" >Change Theme</button>
     </div>
     
    </div>


    </> 
  )
}

export default App