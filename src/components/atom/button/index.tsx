"use client";

import "./index.scss";

interface IButton {
  text: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: IButton) => {
  return (
    <button className={`portfolio-button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
