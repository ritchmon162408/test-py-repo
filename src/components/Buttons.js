import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Buttons = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    to, 
    buttonType
}) => {
  const buttonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const buttonsSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={to} className="btn-mobile">
      <button
        className={`btn ${buttonStyles} ${buttonsSize} ${buttonType}`} 
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Buttons;
