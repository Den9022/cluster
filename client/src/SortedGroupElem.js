import React from "react";

export const SortedGroupElem = ({ input, id }) => {

    const renderEmbeddingElem = (value) => {
    return <p>{value} </p>;
  };

  return (
    <div className="groupElem">
      <p>{id}</p>
      {input.length > 0 && input.map((elem) => renderEmbeddingElem(elem))}
    </div>
  );
};
export default SortedGroupElem;
