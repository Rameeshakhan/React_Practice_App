import React, { useState, useEffect } from 'react';

// bychatGPT
const DynamicTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {time}
    </div>
  );
};

export default DynamicTime;
