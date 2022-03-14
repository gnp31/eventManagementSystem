import React from "react";
import "./Popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        <button className="register">Register</button>
        <button className="learn-more">Learn More</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
