import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import Options from "../Options/Options";
import { Label, LabelGroup, Input } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./EditStatus.css";

export default function EditStatus(props) {
  const { columns, application } = props;
  const { column } = application;
  const context = useContext(ApplicationsContext);
  const { setApplications, applications } = context;

  function handleStatusChange(status, idx) {
    let [year, month, dayNumber] = status.date.split("-");
    month = parseInt(month) - 1;
    const date = new Date(year, month, dayNumber);
    if (dayNumber) {
      application.column[idx].date = date;
      application.column[idx].id = parseInt(status.id);
      setApplications([...applications]);
    }
  }

  function handleRemoveStatus(idx) {
    column.splice(idx, 1);
    setApplications([...applications]);
  }

  return (
    <div className="EditStatus">
      {column.map((status, idx) => (
        <Status
          id={status.id}
          date={status.date}
          key={idx}
          idx={idx}
          columns={columns}
          colLength={column.length}
          handleStatusChange={handleStatusChange}
          removeStatus={handleRemoveStatus}
        />
      ))}
    </div>
  );
}

function Status(props) {
  let { idx, id, date, columns, handleStatusChange, removeStatus, colLength } = props;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month.toString();
  month = month.lenght > 1 ? month : `0${month}`;
  let dayNumber = date.getDate().toString();
  dayNumber = dayNumber.length > 1 ? dayNumber : `0${dayNumber}`;
  let dateString = `${year}-${month}-${dayNumber}`;
  const [form, setForm] = useState({
    id: id,
    date: dateString,
  });

  function handleDateChange(e) {
    const { value } = e.target;
    const newForm = { ...form, date: value };
    setForm(newForm);
    handleStatusChange(newForm, idx);
  }

  function handleOptionChange(e) {
    const newForm = { ...form, id: e.target.value };
    setForm(newForm);
    handleStatusChange(newForm, idx);
  }

  return (
    <div className="Status">
      <div className="divider"></div>
      <div className="options-container">
        <Options options={columns} selected={form.id} handleChange={handleOptionChange} />
        {colLength > 1 && <FontAwesomeIcon icon={faTimes} onClick={(e) => removeStatus(idx)} />}
      </div>
      <LabelGroup>
        <Label htmlFor={`statusDate${idx}`}>Date</Label>
        <Input
          type="date"
          id={`statusDate${idx}`}
          name={`statusDate${idx}`}
          value={form.date}
          onChange={(e) => handleDateChange(e)}
        />
      </LabelGroup>
    </div>
  );
}
