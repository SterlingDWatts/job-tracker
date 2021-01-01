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
    job: "Sotware Engineer 2",
    site: "https://www.ultimatesoftware.com/",
  },
  {
    id: 1,
    column: [
      { id: 0, date: new Date(2020, 4, 14) },
      { id: 3, date: new Date(2020, 4, 14) },
    ],
    company: "Art & Logic",
    job: "Full Stack Web Developer",
    site: "https://artandlogic.com/",
  },
  {
    id: 2,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "GitStart",
    job: "Full Stack JavaScript Developer - Junior",
    site: "https://www.gitstart.com/",
  },
  {
    id: 3,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "CyberCoders",
    job: "Web Developer",
    site: "https://www.cybercoders.com/",
  },
  {
    id: 4,
    column: [{ id: 0, date: new Date(2020, 4, 14) }],
    company: "Digital Media Solutions",
    job: "Frontend Developer",
    site: "https://digitalmediasolutions.com/",
  },
  {
    id: 5,
    column: [{ id: 0, date: new Date(2020, 11, 1) }],
    company: "Fake",
    job: "Fake",
    site: "https://www.google.com",
  },
];

export default function ApplicationsPage(props) {
  const [applications, setApplications] = useState(jobApps);
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
          columns={columns}
        />
      </Route>
    </div>
  );
}
