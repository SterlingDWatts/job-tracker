import React from "react";
import ReactDOM from "react-dom";
import EditStatus from "./EditStatus";

describe("EditStatus Component", () => {
  const columns = [
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
  ];
  const application = {
    id: "1",
    column: [{ id: 0, date: new Date(2020, 11, 1) }],
    company: "Fake",
    job: "Fake",
    site: "https://www.google.com",
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditStatus columns={columns} application={application} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
