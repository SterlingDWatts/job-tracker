import React from "react";
import { format } from "date-fns";
import "./History.css";

export default function History(props) {
  let { column, columns } = props;
  column = column.map((col, idx) => {
    let colName = columns.find((el) => el.id === col.id);
    colName = colName.name;
    return (
      <li key={idx}>
        <div className="name">{colName}</div>
        <div className="date">{format(col.date, "MMM dd")}</div> 
      </li>
    );
  });
  return (
    <div className="History">
      <ul>{column}</ul>
    </div>
  );
}
