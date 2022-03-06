import React from "react";

const MyButton = ({ text, type, onClick }) => {
  const color = ["positive", "negative"];
  const btnType = color.includes(type) ? type : "";
  const selectedType = btnType ? `MyButton_${btnType}` : "";

  return (
    <button className={`MyButton ${selectedType}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
