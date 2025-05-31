import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function sentenceCase(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
        <div className="definition">
        {sentenceCase(props.meaning.definition)}
        {props.meaning.example && (
          <div className="example">
            {sentenceCase(props.meaning.example)}
          </div>
        )}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
