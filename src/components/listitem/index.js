import React from "react";

function Listitem(props) {
  return (
    <li className="grid">
      <div className="copy">{props.detail}</div>
      <div className="photo">{props.img}</div>
    </li>
  );
}

export default Listitem;
