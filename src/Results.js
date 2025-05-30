import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
    return (
    <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
            <Phonetic phonetic={{ 
                text: props.results.phonetic,
                audio: props.audioResults?.phonetics?.[0]?.audio || null,
             }} 
            />
        )}
        </section>
        {props.results.meanings.map(function (meaning, index) {
            return (
            <section key={index}>
                <Meaning meaning={meaning} />
            </section>
            );
        })}
    </div>
    );
} else {
    return null;
    }
}