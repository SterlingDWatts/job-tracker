import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Column from "../../components/Column/Column";
import LargeCard from "../../components/LargeCard/LargeCard";
import AddApplication from "../../components/AddApplication/AddApplication";
import "./ApplicationsPage.css";

export default function ApplicationsPage(props) {
  // eslint-disable-next-line no-unused-vars
  const [columns, setColumns] = useState([
    { id: 0, name: "Applied" },
    { id: 1, name: "Intro Interview" },
    { id: 2, name: "Recruiter Call" },
    { id: 3, name: "Sent Follow-up" },
    { id: 4, name: "Coding Challenge" },
    { id: 5, name: "Sent Follow-up" },
    { id: 6, name: "Technical Interview" },
    { id: 7, name: "Sent Follow-up" },
    { id: 8, name: "Onsite Interview" },
    { id: 9, name: "Offer Letter Date" },
  ]);
  const columnHeaders = columns.map((col, idx) => (
    <div key={idx}>{col.name}</div>
  ));
  const columnComponents = columns.map((col) => (
    <Column key={col.id} id={col.id} />
  ));
  return (
    <div className="ApplicationsPage">
      <div className="top">
        <Link to="/add-application">Add</Link>
      </div>
      <div className="column-headers">{columnHeaders}</div>
      <div className="columns">{columnComponents}</div>
      <Route path="/application/:appId">
        <LargeCard columns={columns} />
      </Route>
      <Route path="/add-application">
        <AddApplication />
      </Route>
    </div>
  );
}
