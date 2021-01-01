import React, { useState } from "react";
import { Route } from "react-router-dom";
import Column from "../../components/Column/Column";
import LargeCard from "../../components/LargeCard/LargeCard";
import "./ApplicationsPage.css";

const jobApps = [
  {
    id: 0,
    column: [{ id: 0, date: new Date(2020, 4, 13) }],
    company: "Ultimate Software",
  },
  {
    id: 1,
    column: [
      { id: 0, date: new Date(2020, 4, 14) },
      { id: 3, date: new Date(2020, 4, 14) },
    ],
    company: "Art & Logic",
  },
  {
    id: 2,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "GitStart",
  },
  {
    id: 3,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "CyberCoders",
  },
  {
    id: 4,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "Digital Media Solutions",
  },
];

export default function ApplicationsPage(props) {
  const [applications, setApplications] = useState(jobApps);
  const [columns, setColumns] = useState([
    { id: 0, name: "Applied" },
    { id: 1, name: "Intro Interview / Recruiter Call" },
    { id: 2, name: "Sent Follow-up" },
    { id: 3, name: "Coding Challenge" },
    { id: 4, name: "Sent Follow-up" },
    { id: 5, name: "Technical Interview" },
    { id: 6, name: "Sent Follow-up" },
    { id: 7, name: "Onsite Interview" },
    { id: 8, name: "Offer Letter Date" },
  ]);
  const columnComponents = columns.map((col) => (
    <Column
      name={col.name}
      key={col.id}
      id={col.id}
      applications={applications}
      setApplications={setApplications}
    />
  ));
  return (
    <div className="ApplicationsPage">
      <div className="columns">{columnComponents}</div>
      <Route path="/application/:appId">
        <LargeCard
          applications={applications}
          setApplications={setApplications}
        />
      </Route>
    </div>
  );
}
