import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [audioResults, setAudioResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleDictionaryDevResponse(response) {
        if (response.data && response.data.length > 0) {
            setAudioResults(response.data[0]);
        } else {
            setAudioResults(null);
        }
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition.`);

        let apiKey = "aac4foe717bf29a66f74f42ef3fte000";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(dictionaryApiUrl)
            .then(handleDictionaryDevResponse)
            .catch(() => setAudioResults(null));
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results audioResults={audioResults} results={results} />
        </div>
    );
}
