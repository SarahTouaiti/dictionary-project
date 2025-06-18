import React from "react";

export default function Example(props) {
  if (props.example) {
    return <em>Example: {props.example}</em>;
  } else {
    return null;
  }
}
