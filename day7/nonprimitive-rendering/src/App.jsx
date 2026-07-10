import React from 'react'


const App = () => {
  const names =[ "Prajan", "Bala", "Harsha", "Harish"]
  return (
    <>
      <div className='bg-black h-100 text-center text-2xl font-bold text-blue-500 flex flex-col justify-center items-center'>
        {names.map((e,i)=>(
        <div className='bg-white w-1/2 m-4 rounded-lg shadow-lg' key={i}>
          <p className='p-4 ' key={i}>{i + 1}. {e}</p>
        </div>

      ))}
      </div>
    </>
  )
}

export default App