import React, { useEffect, useState } from "react";
import "./App.css";
import HandleForm from "./CustomHooks";
import EmbeddingElements from "./EmbeddingElements";
import GroupElements from "./GroupElements";
//import axios from "axios";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() { 

  const sendToApi = (inputs) => {
    //console.log(inputs);
    /*axios.post("http://localhost:9000/back", {
      data: inputs,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    });*/
  };

  const { isSubmitted, inputs, handleInputChange, handleSubmit } = HandleForm();

  const [sortedGroups, setsortedGroups] = useState([]);

  console.log("sortedGroups: ", sortedGroups);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <section>
        <nav>
          <ul>
            <li>
              <a href="/">Kezdeti adatok generálása</a>
            </li>
            <li>
              <a href="/">Eredmény</a>
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
            <button name="run" type="submit">
              Újra klaszterezés futtatása
            </button>
          </div>
          <DndProvider backend={HTML5Backend}>
          {isSubmitted && <EmbeddingElements inputs={inputs} />}
          {isSubmitted && <GroupElements groups={inputs["vectorCount"]} setsortedGroups={setsortedGroups} />}
          </DndProvider>
        </article>
      </section>
    </div>
  );
}
export default App;
