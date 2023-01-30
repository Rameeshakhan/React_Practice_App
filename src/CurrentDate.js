import React from 'react';

const CurrentDate = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      {formattedDate}
    </div>
  );
};

export default CurrentDate;
