import React from "react";
import PropTypes from "prop-types";

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  icon,
  width,
  colorHover,
}) => {
  return (
    <button
      className={`text-${color} text-${size} p-3 hover:drop-shadow-xl ${
        colorHover && `hover:bg-${colorHover}`
      } ${width && `w-${width}`}  `}
      style={{
        borderRadius,
        backgroundColor: bgColor,
      }}
    >
      {text ? text : icon}
    </button>
  );
};

Button.propsTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  borderRadius: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  colorHover: PropTypes.string,
  icon: PropTypes.func,
};

export default Button;
