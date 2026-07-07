import React from 'react'
import Hero from '../assets/hero.jpeg'
import memberone from '../assets/member1.jpeg'
import membertwo from '../assets/member2.jpeg'
import memberthree from '../assets/member3.jpeg'
import memberfour from '../assets/member4.jpeg'

const Banner = () => {
  return (
    <>
    <div>
      <img className="w-full h-100" src={Hero} alt="Hero" />

    </div>
    </>
  )
}

export default Banner

export const CardsDisplay = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      <div className='bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col items-center'>
        <img src={memberone} alt="Member One" className='rounded-2xl' />
        <h2  className='text-xl font-bold text-red-500'>Iron Man</h2>
        <p>The Billionare</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Read More
        </button>
      </div>
      <div className='bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col items-center'>
        <img src={membertwo} alt="Member Two" className='rounded-2xl' />
        <h2  className='text-xl font-bold text-blue-500'>Captain America</h2>
        <p>The First Avenger</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Read More
        </button>
      </div>
      <div className='bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col items-center '>
        <img src={memberthree} alt="Member Three" className='rounded-2xl' />
        <h2  className='text-xl font-bold text-yellow-500'>Thor</h2>
        <p>The God of Thunder</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Read More
        </button>
      </div>
      <div className='bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col items-center '>
        <img src={memberfour} alt="Member Four" className='rounded-2xl' />
        <h2 className='text-xl font-bold text-green-500'>Hulk</h2>
        <p>The Strongest Avenger</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Read More
        </button>
      </div>
    </div>
    </>
  )
}