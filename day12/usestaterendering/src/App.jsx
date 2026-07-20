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
    setActors(
      actors.map((actor)=>(actor === "Ajith" ? "SK" : actor ))
    )

  }

  //TASK 4  
  const [numbers, setNumbers] = useState([10,20,30,40])
  const handleNumbers = ()=>{
    setNumbers(
      numbers.map((number)=>(
        number === 30 ? 100 : number
      ))
    )

  }


  //TASK 5
  const [addFruit, setAddFruit] = useState(["Apple","Orange"])
  const handleAddFruit = ()=>{
    setAddFruit([...addFruit, "Mango"])
    
  }


  //TASK 6
  const [removeFruit, setRemoveFruit] = useState(["Apple","Orange","Mango"])
  const handleRemoveFruit = ()=>{
    
    setRemoveFruit(
      removeFruit.filter((fruit)=>(fruit !== "Orange"))
    )
    
  }

  //TASK 7
  const [arrObj, setArrObj] = useState([ { id:1, name:"Sudhan" }, { id:2, name:"Rahul" } ])
  const handleArrObj=()=>{
    setArrObj(
      arrObj.map((data)=>
        data.id == 1 ? { ...data, name:"Karthik"} : data
      )
    )
  }


   //TASK 8
  const [arrObj1, setArrObj1] = useState([
   {
      id:1,
      course:"React"
   },

   {
      id:2,
      course:"Node"
   }
])
  const handleArrObj1=()=>{
    setArrObj1(
      arrObj1.map((data)=>
        data.id == 1 ? { ...data, course:"Mern"} : data
      )
    )
  }


  //TASK 9
  const [products, setProducts] = useState([
   {
      id:1,
      name:"Laptop"
   }
])
  const handleProducts =()=>{
    setProducts(
      [...products, {
        id: 2,
        name: "Mobile",
      },]
      )
  }


  //TASK 10
  const [students, setStudents] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Karthik" },
  ]);

  const deleteStudent = () => {
    setStudents(
      students.filter((student) => student.name !== "Rahul")
    );
  };



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
    <p>{actors.join(" ,")}</p>
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleActors} >Change Actor</button>
   </div>


   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 4</h2>
    {numbers.map((number,i)=>(
      <p key={i+1}>{number}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleNumbers} >Change Number</button>
   </div>

   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 5</h2>
    {addFruit.map((fruit,i)=>(
      <p key={i+1}>{fruit}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleAddFruit} >Add Fruit</button>
   </div>

   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 6</h2>
    {removeFruit.map((fruit,i)=>(
      <p key={i+1}>{fruit}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleRemoveFruit} >Remove Fruit</button>
   </div>


    <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 7</h2>
    {arrObj.map((namearr)=>(
      <p key={namearr.id}>{namearr.id}-{namearr.name}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleArrObj} >Update Name</button>
   </div>


   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 8</h2>
    {arrObj1.map((namearr)=>(
      <p key={namearr.id}>{namearr.id}-{namearr.course}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleArrObj1} >Update Course</button>
   </div>

   <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 9</h2>
    {products.map((namearr)=>(
      <p key={namearr.id}>{namearr.id}-{namearr.name}</p>
    ))}
    <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={handleProducts} >Add Products</button>
   </div>

   
    <div className='p-4 m-2 bg-blue-300 rounded-2xl'>
    <h2 className="text-2xl " >TASK 10</h2>
    {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}

      <button className='bg-blue-500 px-4 py-2 mt-2 rounded' onClick={deleteStudent} >Remove Rahul</button>
   </div>


   </>
  )
}

export default App