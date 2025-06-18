import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <ul>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <li>
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <Example example={definition.example} />
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
