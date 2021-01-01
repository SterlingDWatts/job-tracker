import React from "react";
import Card from "../Card/Card";
import "./Column.css";

export default function Column(props) {
  let applications = props.applications;
  if (applications) {
    applications = applications.filter(
      (application) =>
        application.column[application.column.length - 1].id === props.id
    );
  }
  if (applications) {
    applications = applications.map((application) => (
      <Card application={application} key={application.id} />
    ));
  }
  return (
    <div className="Column">
      <h2>{props.name}</h2>
      <div className="card-container">{applications}</div>
    </div>
  );
}
