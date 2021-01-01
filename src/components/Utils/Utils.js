import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import "./Utils.css";

export function Overlay(props) {
  return (
    <div className={`Overlay ${props.className}`}>
      <div className="container">
        <Link to="/" className="close">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
        {props.children}
      </div>
    </div>
  );
}

export function LabelGroup(props) {
  return (
    <div className={`LabelGroup ${props.className}`}>{props.children}</div>
  );
}

export function Input({ error, className, ...props }) {
  const classNames = !!error
    ? ["Input", "Input--error", className]
    : ["Input", className];
  return <input className={classNames.join(" ")} {...props} />;
}

export function Label({ className, ...props }) {
  return <label className={["Label", className].join(" ")} {...props} />;
}
