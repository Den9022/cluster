import React from "react";
import "./App.css";
import HandleForm from "./CustomHooks";
import EmbeddingElements from "./EmbeddingElements";
import GroupElements from "./GroupElements";
import axios from "axios";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";

function App() {

  const { isSubmitted, inputs, handleInputChange, handleSubmit } = HandleForm();
  var sortedGroups = [];

  const sendToApi = (inputs, treshold) => {
    axios.post("http://localhost:9000/back", {
      data: {inputs, treshold},
      /*headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }*/
    });
  };

  const handleClusterSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log(inputs);
    console.log("sending sortedGroups: ", sortedGroups);
    sendToApi(sortedGroups, inputs.thresholdValue);
  };

  function setsortedGroups(id, items) {
    console.log("id: ", id);
    console.log("items: " , items);

    var found = false;
    var length = sortedGroups.length;

    if (length < 1) {
      let item = {
        id: id,
        items: [],
      };
      sortedGroups.push(item);
    }

    for (let i = 0; i < length; i++) {
      if (sortedGroups[i].id === id) {
        sortedGroups[i].items = items;
        found = true;
        break;
      }

      if (i + 1 === length) {
        if (!found) {
          let item = {
            id: id,
            items: [],
          };
          sortedGroups.push(item);
        }
      }
    }
    console.log("sortedGroups: ", sortedGroups);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Generate data</h1>
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
          <form onSubmit={handleSubmit}>
            <div>
              <label for="randomSeed">Random seed</label>
              <input
                name="randomSeed"
                type="number"
                onChange={handleInputChange}
                value={inputs.randomSeed}
              ></input>
            </div>
            <div>
              <label for="embeddingCount">Embebedding-ek száma</label>
              <input
                name="embeddingCount"
                type="number"
                onChange={handleInputChange}
                value={inputs.embeddingCount}
              ></input>
            </div>
            <div>
              <label for="embeddingLength">Embebedding-ek hossza</label>
              <input
                name="embeddingLength"
                type="number"
                onChange={handleInputChange}
                value={inputs.embeddingLength}
              ></input>
            </div>
            <div>
              <label for="vectorCount">Vektorhalmazok száma</label>
              <input
                name="vectorCount"
                type="number"
                onChange={handleInputChange}
                value={inputs.vectorCount}
              ></input>
            </div>
            <div>
              <label for="thresholdValue">Threshold érték</label>
              <input
                name="thresholdValue"
                type="number"
                onChange={handleInputChange}
                value={inputs.thresholdValue}
              ></input>
            </div>
            <button name="geneareEmbedding" type="submit">
              Embedding-ek generálása
            </button>
          </form>
          <div>
            <form onSubmit={handleClusterSubmit}>
              <button name="run" type="submit">
                Újra klaszterezés futtatása
              </button>
            </form>
          </div>
          <DndProvider backend={HTML5Backend}>
            {isSubmitted && <EmbeddingElements inputs={inputs} />}
            {isSubmitted && (
              <GroupElements
                groups={inputs.vectorCount}
                setsortedGroups={setsortedGroups}
              />
            )}
          </DndProvider>
        </article>
      </section>
    </div>
  );
}
export default App;
