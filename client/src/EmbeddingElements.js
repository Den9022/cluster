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
    let fake_inputs = {
      randomSeed: 11,
      embeddingCount: 8,
      embeddingLength: 4,
      vectorCount: 3,
      thresholdValue: 4,
    };

    let elements = [];

    const renderEmbeddingElem = (input) => {
      return <EmbeddingElem id={input.id} text={input.text} />;
    };

    for (let index = 0; index < fake_inputs.embeddingCount; index++) {
      let vectors = generareRandomVectors(
        fake_inputs.embeddingLength,
        fake_inputs.randomSeed
      );

      let elem = {
        id: vectors.reduce((a, b) => a + b, 0),
        text: vectors.join(),
      };

      elements.push(elem);
    }

    return (
      <>
        <div class="embeddingElements">
          {elements.map((input) => renderEmbeddingElem(input))}
        </div>
      </>
    );
  } else {
    return <div class="embeddingElements"></div>;
  }
}

export default EmbeddingElements;
