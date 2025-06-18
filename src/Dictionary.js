import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              value={keyword}
            />
            <input type="submit" value="search" />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant..
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
