import React from "react";
import "./Utils.css";

export function Overlay(props) {
  return (
    <div className={`Overlay ${props.className}`}>
      <div className="container">{props.children}</div>
    </div>
  );
}
