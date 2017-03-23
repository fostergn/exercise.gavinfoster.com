import React from 'react';

const Single = ({params}) => {
  const { id } = params
  return (
    <div>
      <h1>Single for { id }</h1>
    </div>
  );
}

export default Single;
