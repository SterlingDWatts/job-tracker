import React from "react";
import "./Options.css";

export default function Options(props) {
  const { options, selected, handleChange } = props;

  const optionsComponents = options.map((option, idx) => {
    return (
      <option value={option.id} key={idx}>
        {option.name}
      </option>
    );
  });
  return (
    <select className="Options" value={selected} onChange={(e) => handleChange(e)}>
      {optionsComponents}
    </select>
  );
}
