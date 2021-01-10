import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Options from "../Options/Options";
import History from "../History/History";
import { Overlay } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./LargeCard.css";

export default function LargeCard(props) {
  const context = useContext(ApplicationsContext);
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const { applications, removeApplication } = context;
  const { appId } = useParams();
  const { columns } = props;

  function handleEllipsisClick(e) {
    e.preventDefault();
    setShowMenu(true);
  }

  let application;
  application = applications.find((app) => app.id === appId);
  if (!!application) {
    const { column, job, company, site } = application;
    const colLength = column.length;
    return (
      <Overlay
        className="LargeCard"
        ellipsis={true}
        ellipsisClick={handleEllipsisClick}
      >
        {showMenu && (
          <div className="ellipsis-menu">
            <div className="delete" onClick={(e) => removeApplication(appId)}>
              Delete
            </div>
          </div>
        )}
        <header onClick={(e) => setShowMenu(false)}>
          <h2>
            <a href={site} rel="noreferrer" target="_blank">
              {company}
            </a>
          </h2>
          <div className="job">{job}</div>
        </header>
        <div className="content" onClick={(e) => setShowMenu(false)}>
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
