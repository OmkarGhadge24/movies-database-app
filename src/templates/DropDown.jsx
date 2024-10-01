import React from "react";

const DropDown = ({ title, option, func }) => {
  return (
    <div className="select">
      <select defaultValue="0" id="format" name="format" onChange={func}>
        <option value="0" disabled>
          {title}
        </option>
        {option.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
