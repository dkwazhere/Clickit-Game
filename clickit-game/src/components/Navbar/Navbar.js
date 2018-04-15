import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav navbar nav-justified">
            <li><a href="/">Llama Click Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;
