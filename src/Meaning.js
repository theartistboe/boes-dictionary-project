import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>{props.meaning.definition}
          <br />
          <strong>Example: </strong>
          <i>{props.meaning.example}</i>
          <br />
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
