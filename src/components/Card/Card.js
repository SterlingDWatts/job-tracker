import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Card.css";

export default function Card(props) {
  const { id, company, job, column } = props.application;
  const colLength = column.length;
  let date = column[colLength - 1].date;
  date = format(date, "MMM d, yyyy");
  return (
    <Link className="Card" to={`/application/${id}`}>
      <div>
        <div className="company">{company}</div>
        <div className="job">{job}</div>
        <div className="date">{date}</div>
      </div>
    </Link>
  );
}
