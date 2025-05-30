import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    if (props.results) {
    return (
    <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
            <Phonetic phonetic={{ 
                text: props.results.phonetic,
                audio: props.audioResults?.phonetics?.[0]?.audio || null,
             }} 
            />
        )}

        {props.results.meanings.map(function (meaning, index) {
            return (
            <div key={index}>
                <Meaning meaning={meaning} />
            </div>
            );
        })}
    </div>
    );
} else {
    return null;
    }
}