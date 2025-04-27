import React, { useState } from 'react';
import "./greeting.css"

const Greeting = () => {
    const[greeting, settogreeting] = useState('AWESOME')

    const handlegreeting = () => {
        settogreeting('Welcome To React + Vite')
    }

  return (
    <div className='container'>
        <div className='card'>
           <h1>{greeting}</h1>
           <button onClick={handlegreeting}>Change Greeting</button>
        </div>
    </div>
  )
}

export default Greeting
