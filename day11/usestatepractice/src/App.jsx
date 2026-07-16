import React, { useState } from 'react'

const App = () => {



  // const [number, setNumber] = useState(false)

  // const handleClick = () => {
  //   setNumber(!number)
  // }

  let [array, setArray] = useState([1, 2, 3, 4, 5])
   console.log(array)

   const handleClick = () => {
    setArray([...array, array.length + 1])
   }




  return (
    <>
    {/* <p className={`text-2xl font-bold p-4 ${number ? "bg-amber-200" : "bg-gray-200"}`}>Hello, World!</p>
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Click me
    </button> */}

    <p>
      {array.map((e,i) => (
        <div key={i+1} className="bg-gray-200 p-2 m-1 rounded">
          {e}
        </div>
      ))}
    </p>

    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Add Item
    </button>





    </>
  )
}

export default App