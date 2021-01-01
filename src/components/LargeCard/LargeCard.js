import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Options from "../Options/Options";
import History from "../History/History";
import { Overlay } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./LargeCard.css";

export default function LargeCard(props) {
  const context = useContext(ApplicationsContext);
  const history = useHistory();
  const { applications } = context;
  const { appId } = useParams();
  const { columns } = props;

  let application;
  application = applications.find((app) => app.id === appId);
  if (!!application) {
    const { column, job, company, site } = application;
    const colLength = column.length;
    return (
      <Overlay className="LargeCard">
        <header>
          <h2>
            <a href={site} rel="noreferrer" target="_blank">
              {company}
            </a>
          </h2>
          <div className="job">{job}</div>
        </header>
        <div className="content">
          <Options options={columns} selected={column[colLength - 1].id} />
          <History column={column} columns={columns} />
        </div>
      </Overlay>
    );
  } else {
    history.push("/");
    return null;
  }
}
