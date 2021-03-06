import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Options from "../Options/Options";
import History from "../History/History";
import { Overlay } from "../Utils/Utils";
import ApplicationsContext from "../../contexts/ApplicationsContext/ApplicationsContext";
import "./LargeCard.css";

export default function LargeCard(props) {
  const context = useContext(ApplicationsContext);
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const { applications, removeApplication, addStatus } = context;
  const { columns, appId } = props;

  function handleEllipsisClick(e) {
    e.preventDefault();
    setShowMenu(true);
  }

  function handleDeleteApplication() {
    history.push("/");
    removeApplication(appId);
  }

  function handleEditClick() {
    history.push(`/?edit=${appId}`);
  }

  function handleOptionChange(e) {
    const { value } = e.target;
    addStatus(appId, value);
  }

  const application = applications.find((app) => app.id === appId);
  const { column, job, company, site } = application;
  const colLength = column.length;
  return (
    <Overlay className="LargeCard" ellipsis={true} ellipsisClick={handleEllipsisClick}>
      {showMenu && (
        <div className="ellipsis-menu">
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
          <button type="button" onClick={handleDeleteApplication}>
            Delete
          </button>
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
        <Options options={columns} selected={column[colLength - 1].id} handleChange={handleOptionChange} />
        <History column={column} columns={columns} />
      </div>
    </Overlay>
  );
}
