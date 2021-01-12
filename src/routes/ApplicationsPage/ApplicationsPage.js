import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import Column from "../../components/Column/Column";
import LargeCard from "../../components/LargeCard/LargeCard";
import LargeCardEdit from "../../components/LargeCardEdit/LargeCardEdit";
import AddApplication from "../../components/AddApplication/AddApplication";
import "./ApplicationsPage.css";

export default function ApplicationsPage(props) {
  const context = useContext(ApplicationsContext);
  const { applications } = context;
  let useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const appQuery = query.get("app");
  const editQuery = query.get("edit");
  const addQuery = query.get("add");
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
  const columnHeaders = columns.map((col, idx) => <div key={idx}>{col.name}</div>);
  const columnComponents = columns.map((col) => <Column key={col.id} id={col.id} />);
  return (
    <div className="ApplicationsPage">
      <div className="top">
        <Link to="/?add=true" className="add-app">
          Add
        </Link>
      </div>
      <div className="column-headers">{columnHeaders}</div>
      <div className="columns">{columnComponents}</div>
      {applications.find((app) => app.id === appQuery) && <LargeCard columns={columns} appId={appQuery} />}
      {applications.find((app) => app.id === editQuery) && <LargeCardEdit columns={columns} appId={editQuery} />}
      {addQuery === "true" && <AddApplication />}
    </div>
  );
}
