import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import EmbeddingElem from "./EmbeddingElem";

export const GroupElem = ({ id, setsortedGroups }) => {
  const [items, setItems] = useState([]);

  const ref = useRef(null);

  const renderEmbeddingElem = (value) => {
    return <EmbeddingElem text={value} />;
  };
  const [, drop] = useDrop({
    accept: "embeddingElem",
    drop(item) {
      var itemSaved = async () => {
        return await new Promise((resolve) => {
          setItems((oldItems) => [...oldItems, [item.text]]);
          resolve();
        });
      };
      itemSaved().then(setsortedGroups(id, items));
    },
  });

  console.log("items: ", items);

  drop(ref);
  return (
    <div ref={ref} key={id} className="groupElem">
      <p>{id}</p>
      {items.length > 0 && items.map((elem) => renderEmbeddingElem(elem))}
    </div>
  );
};
export default GroupElem;
