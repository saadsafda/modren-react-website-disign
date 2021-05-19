import React from 'react';
import './Button.css';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
}

export default Button