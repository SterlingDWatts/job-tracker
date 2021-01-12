import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Overlay, LabelGroup, Input, Label, Button } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import EditStatus from "../EditStatus/EditStatus";
import "./LargeCardEdit.css";

export default function LargeCardEdit(props) {
  const context = useContext(ApplicationsContext);
  const { applications } = context;
  const { appId, columns } = props;
  const history = useHistory();
  let application = applications.find((app) => app.id === appId);
  const [form, setForm] = useState({
    company: {
      value: application.company,
      touched: false,
    },
    companySite: {
      value: application.site,
      touched: false,
    },
    jobTitle: {
      value: application.job,
      touched: false,
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: { value, touched: true },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    application.company = form.company.value;
    application.site = form.companySite.value;
    application.job = form.jobTitle.value;
    context.setApplications([...applications]);
    history.push("/");
  }

  return (
    <Overlay className="LargeCardEdit">
      <form onSubmit={handleSubmit}>
        <LabelGroup>
          <Label htmlFor="company">Company</Label>
          <Input
            type="text"
            id="company"
            name="company"
            placeholder="ex: Mindera"
            value={form.company.value}
            onChange={(e) => handleChange(e)}
          />
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="companySite">Company Site</Label>
          <Input
            type="url"
            id="companySite"
            name="companySite"
            value={form.companySite.value}
            onChange={(e) => handleChange(e)}
          />
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={form.jobTitle.value}
            onChange={(e) => handleChange(e)}
          />
        </LabelGroup>
        <EditStatus application={application} columns={columns} />
        <Button type="submit">Save</Button>
      </form>
    </Overlay>
  );
}
