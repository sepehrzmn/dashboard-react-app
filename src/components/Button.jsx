import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      className={`bg-[${bgColor}] text-${color} rounded-[${borderRadius}] text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

Button.propsTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  borderRadius: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
