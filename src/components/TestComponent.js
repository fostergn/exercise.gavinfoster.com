import React from 'react';
import classNames from 'classnames';

const TestComponent = ({button, toggleButton}) => {

  console.log('toggle button: ', toggleButton);
  const buttonClass = classNames({
    'btn': true,
    'btn--active': button
  })

  return (
    <p
      className={buttonClass}
      onClick = {() => toggleButton()}
      >
      test component
    </p>
)}

export default TestComponent;
