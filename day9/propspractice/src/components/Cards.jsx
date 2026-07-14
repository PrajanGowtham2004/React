import React from 'react'
import Banner from './Banner'

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]

const Cards = () => {
  return (
    <>
        <Banner passing = {customers}/>

    </>
  )
}

export default Cards