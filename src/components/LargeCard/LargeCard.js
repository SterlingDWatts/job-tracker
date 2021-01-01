import React from "react";
import { useParams } from "react-router-dom";
import Options from "../Options/Options";
import History from "../History/History";
import "./LargeCard.css";

export default function LargeCard(props) {
  const { appId } = useParams();
  const { applications, columns, setApplications } = props;

  function handleOptionChange(e, application) {
    const { value } = e.target;
    const colItem = {
      id: parseInt(value),
      date: new Date(),
    };
    application.column.push(colItem);
    setApplications([...applications]);
  }

  let application;
  application = applications.find((app) => app.id === parseInt(appId));
  const { column } = application;
  const colLength = column.length;
  return (
    !!application && (
      <div className="LargeCard">
        <div className="container">
          <h2>
            <a href={application.site} rel="noreferrer" target="_blank">
              {application.company}
            </a>
          </h2>
          <div className="job">{application.job}</div>
          <div className="content">
            <Options
              application={application}
              options={columns}
              selected={column[colLength - 1].id}
              optionChange={handleOptionChange}
            />
            <History column={application.column} columns={columns} />
          </div>
        </div>
      </div>
    )
  );
}
