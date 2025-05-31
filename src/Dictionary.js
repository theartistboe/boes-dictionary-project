import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [audioResults, setAudioResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

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

    function handleSubmit(event) {
        event.preventDefault();
        search ();
    }

    // She Codes Dictionary API for definitions, examples and synonyms: 
    // https://api.shecodes.io/dictionary/v1/define?word=book&key=aac4foe717bf29a66f74f42ef3fte000

    function search() {
        let apiKey = "aac4foe717bf29a66f74f42ef3fte000";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

       // Dev Dictionary API for audio
       // https://api.dictionaryapi.dev/api/v2/entries/en/sunset
       
        let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(dictionaryApiUrl)
            .then(handleDictionaryDevResponse)
            .catch(() => setAudioResults(null));
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} 
                defaultValue={props.defaultKeyword}/>
            </form>
            <div className="hint">
                suggested words: sunset, cat, space, weather...
            </div>
            </section>
            <Results audioResults={audioResults} results={results} />
        </div>
    );
    } else {
        load();
        return "Loading...";
    }
}