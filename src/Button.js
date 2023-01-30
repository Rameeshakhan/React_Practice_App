// import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';

const Button = () => {
    const [num, setNum] = useState(0);
    const handleChange = () => {
        setNum(num + 1)
    }
    useEffect(() => {
        alert("Button clicked")
    },[num])

  return (
    <div className='container'>
       <button className="btn btn-primary m-3" onClick={handleChange}>Click me</button>
        <h2 className='m-3'>{num}</h2>
    </div>
  )
}

export default Button
