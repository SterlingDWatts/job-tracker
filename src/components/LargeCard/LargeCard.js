import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import Options from "../Options/Options";
import History from "../History/History";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./LargeCard.css";

export default function LargeCard(props) {
  const context = useContext(ApplicationsContext);
  const { applications } = context;
  const { appId } = useParams();
  const { columns } = props;

  let application;
  application = applications.find((app) => app.id === parseInt(appId));
  const { column, job, company, site } = application;
  const colLength = column.length;
  return (
    !!application && (
      <div className="LargeCard">
        <div className="container">
          <Link to="/" className="close">
            <FontAwesomeIcon icon={faTimes} />
          </Link>
          <header>
            <h2>
              <a href={site} rel="noreferrer" target="_blank">
                {company}
              </a>
            </h2>
            <div className="job">{job}</div>
          </header>
          <div className="content">
            <Options
              options={columns}
              selected={column[colLength - 1].id}
            />
            <History column={column} columns={columns} />
          </div>
        </div>
      </div>
    )
  );
}
