import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEllipsisV } from "@fortawesome/pro-light-svg-icons";
import "./Utils.css";

export function Overlay(props) {
  return (
    <div className={`Overlay ${props.className}`}>
      <div className="container">
        <div className="icons">
          <Link to="/" className="close">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          {props.ellipsis && (
            <button type="button" className="ellipsis-button" onClick={(e) => props.ellipsisClick(e)}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
}

Overlay.defaultProps = {
  ellipsesClick: () => {},
};

export function LabelGroup(props) {
  return <div className={`LabelGroup ${props.className}`}>{props.children}</div>;
}

export function Input({ error, className, ...props }) {
  const classNames = !!error ? ["Input", "Input--error", className] : ["Input", className];
  return <input className={classNames.join(" ")} {...props} />;
}

export function Label({ className, ...props }) {
  return <label className={["Label", className].join(" ")} {...props} />;
}
