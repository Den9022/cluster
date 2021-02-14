import React from "react";
import EmbeddingElem from "./EmbeddingElem";

function EmbeddingElements({ inputs }) {
  const generareRandomVectors = (length, seed) => {
    let vectors = [];
    for (let index = 0; index < length; index++) {
      vectors.push((Math.random() * (seed - 1)).toFixed(1));
    }
    return vectors;
  };

  if (Object.keys(inputs).length > 0) {

    let elements = [];

    const renderEmbeddingElem = (input) => {
      return <EmbeddingElem key={input.id} id={input.id} text={input.text} />;
    };

    for (let index = 0; index < inputs.embeddingCount; index++) {
      let vectors = generareRandomVectors(
        inputs.embeddingLength,
        inputs.randomSeed
      );

      let elem = {
        id: vectors.reduce((a, b) => a + b, 0),
        text: vectors.join(),
      };

      elements.push(elem);
    }

    return (
      <>
        <div className="embeddingElements">
          {elements.map((input) => renderEmbeddingElem(input))}
        </div>
      </>
    );
  } else {
    return <div className="embeddingElements"></div>;
  }
}

export default EmbeddingElements;
