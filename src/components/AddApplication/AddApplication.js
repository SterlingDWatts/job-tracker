import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Overlay, LabelGroup, Input, Label, Button } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./AddApplication.css";

export default function AddApplication(props) {
  const history = useHistory();
  const context = useContext(ApplicationsContext);
  const [form, setForm] = useState({
    company: {
      value: "",
      touched: false,
    },
    companySite: {
      value: "",
      touched: false,
    },
    jobTitle: {
      value: "",
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
    const id = uuidv4();
    const app = {
      id,
      column: [{ id: 0, date: new Date() }],
      company: form.company.value,
      job: form.jobTitle.value,
      site: form.companySite.value,
    };
    const { applications, setApplications } = context;
    setApplications([...applications, app]);
    setForm({
      company: {
        value: "",
        touched: false,
      },
      companySite: {
        value: "",
        touched: false,
      },
      jobTitle: {
        value: "",
        touched: false,
      },
    });
    history.push(`/?app=${id}`);
  }

  return (
    <Overlay className="AddApplication">
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
        <Button type="submit">Save</Button>
      </form>
    </Overlay>
  );
}
