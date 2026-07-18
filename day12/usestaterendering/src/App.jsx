import React, {useState} from 'react'

const App = () => {

  //TASK 1
  const [student, setStudent] = useState({
   name:"Prajan",
   course:"React"
  })
  const handleChange= ()=>{
    const copy = {...student,course:"Mern"}
    setStudent(copy)
  }

  //TASK 2
  const [product, setProduct] = useState({
   name:"Mobile",
   price:20000
  })
  const handleProduct = ()=>{
    setProduct({...product,price:25000})
  }

  //TASK 3
  const [actors, setActors] = useState(["Vijay","Ajith","Suriya"])
  const handleActors = ()=>{
    setActors()

  }




  return (
   <>
   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 1</h2>
    <p className="text-xl" >{student.name}</p>
    <p className="text-xl" >{student.course}</p>
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleChange} >Change course</button>
   </div>


   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
     <h2 className="text-2xl " >TASK 2</h2>
     <p className="text-xl" >{product.name}</p>
     <p className="text-xl" >{product.price}</p>
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleProduct} >Change Price</button>
   </div>


   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 3</h2>
    <p>{actors.join(", ")}</p>
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleActors} >Change Price</button>
   </div>


   </>
  )
}

export default App