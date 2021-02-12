import React from "react";
import { Link } from "react-router-dom";
import SortedGroupElements from "./SortedGroupElements";

function Results() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Results</h1>
      </header>
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/">Kezdeti adatok generálása</Link>
            </li>
            <li>
              <Link to="/results">Eredmények</Link>
            </li>
          </ul>
        </nav>

        <article>
          <div>Ide jön az eredmény:</div>
          <SortedGroupElements />
        </article>
      </section>
    </div>
  );
}
export default Results;
