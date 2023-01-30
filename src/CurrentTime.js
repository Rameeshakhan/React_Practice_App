import React from 'react';

const CurrentTime = () => {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString();

  return (
    <div>
      {formattedTime}
    </div>
  );
};

export default CurrentTime;
