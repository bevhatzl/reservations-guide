import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"

function Item(props) {
  return (
    <li className={"nav-item " + props.className}>
        <Link to={props.href}><span className="nav-link">
        {props.icon}
        {props.text}</span></Link>
    </li>
  );
}
export default Item;