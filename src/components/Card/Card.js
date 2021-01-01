import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  return (
    <Link className="Card" to={`/application/${props.application.id}`}>
      <div>{props.application.company}</div>
    </Link>
  );
}
