import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./Options.css";

export default function Options(props) {
  const context = useContext(ApplicationsContext);
  const { addStatus } = context;
  const { options, selected } = props;
  const { appId } = useParams();

  function handleChange(appId, e) {
    const { value } = e.target;
    addStatus(appId, value)
  }

  const optionsComponents = options.map((option, idx) => {
    return (
      <option value={option.id} key={idx}> 
        {option.name}
      </option>
    );
  });
  return (
    <select
      className="Options"
      value={selected}
      onChange={(e) => handleChange(appId, e)}
    >
      {optionsComponents}
    </select>
  );
}
