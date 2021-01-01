import React, { useContext } from "react";
import Card from "../Card/Card";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./Column.css";

export default function Column(props) {
  const { id, name } = props
  const context = useContext(ApplicationsContext);
  let { applications } = context;
  if (applications) {
    applications = applications.filter(
      (application) =>
        application.column[application.column.length - 1].id === id
    );
  }
  if (applications) {
    applications = applications.map((application, idx) => (
      <Card application={application} key={idx} />
    ));
  }
  return (
    <div className="Column">
      <h2>{name}</h2>
      <div className="card-container">{applications}</div> 
    </div>
  );
}
