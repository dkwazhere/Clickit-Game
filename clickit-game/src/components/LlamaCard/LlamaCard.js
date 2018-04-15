import React from "react";
import "./LlamaCard.css";

  const LlamaCard = props => (
      <div className="card">
          <div className="img-container">
              <a onClick={() => props.selectLlama(props.llamaselect)}
                  className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
              >
                  <img alt={props.breed} src={props.image} />
              </a>
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
      </div>
  );


export default LlamaCard;
