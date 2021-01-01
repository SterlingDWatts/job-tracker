import React, { useState } from "react";
import { Route } from "react-router-dom";
import Column from "../../components/Column/Column";
import LargeCard from "../../components/LargeCard/LargeCard";
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
  const columnComponents = columns.map((col) => (
    <Column
      name={col.name}
      key={col.id}
      id={col.id}
    />
  ));
  return (
    <div className="ApplicationsPage">
      <div className="columns">{columnComponents}</div>
      <Route path="/application/:appId">
        <LargeCard
          columns={columns} 
        />
      </Route>
    </div>
  );
}
