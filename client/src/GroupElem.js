import React, { useRef, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import EmbeddingElem from "./EmbeddingElem";

export const GroupElem = ({ id, setsortedGroups }) => {
  const [items, setItems] = useState([]);

  const ref = useRef(null);

  /*useEffect(() => {
    setsortedGroups([id, items]);
  }, items);*/

  const renderEmbeddingElem = (value) => {
    return <EmbeddingElem text={value} />;
  };
  const [, drop] = useDrop({
    accept: "embeddingElem",
    drop(item) {
      setItems((oldItems) => [...oldItems, [item.text]]);
      setsortedGroups([id, items]);
    },
  });

  console.log("items: ", items);

  drop(ref);
  return (
    <div ref={ref} key={id} class="groupElem">
      <p>{id}</p>
      {items.length > 0 && items.map((elem) => renderEmbeddingElem(elem))}
    </div>
  );
};
export default GroupElem;
