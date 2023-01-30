import React, { useEffect, useState } from 'react'

// created by me
const Time = () => {
    // const n =new Date().toLocaleTimeString()
    const [time, setTime] = useState(new Date().toLocaleTimeString());
   useEffect(() => {
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)
   })
  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default Time
