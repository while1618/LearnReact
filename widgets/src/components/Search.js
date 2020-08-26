import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearInterval(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const asyncSearch = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm
        }
      });

      if (data.query)
        setResults(data.query.search);
      else
        setResults([]);
    }
    asyncSearch();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Search:</label>
          <input type="text" className="input" id="search" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
