import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊 Listen
        </a>
        <br />
        <span className="phonetic-text">{props.phonetic.text}</span>
      </div>
    );
  }
}
