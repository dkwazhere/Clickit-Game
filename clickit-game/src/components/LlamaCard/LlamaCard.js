import React from "react";
import "./LlamaCard.css";

const LlamaCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeLlama(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
export default LlamaCard;
