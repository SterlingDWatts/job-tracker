import React from "react";
import { useParams } from "react-router-dom";
import "./LargeCard.css";

export default function LargeCard(props) {
  const { appId } = useParams();
  let application;
  application = props.applications.find((app) => app.id == appId);
  return (
    !!application && (
      <div className="LargeCard">
        <div className="container">
          <h2>{application.company}</h2>
        </div>
      </div>
    )
  );
}
