import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";

export const EmbeddingElem = ({ id, text }) => {
  const ref = useRef(null);

  const [isDisabled, setisDisabled] = useState(false);

  const [, drag] = useDrag({
    item: { type: "embeddingElem", text: text, id: id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.dropEffect) {
        if (dropResult.dropEffect === "move") {
          setisDisabled(true);
        }
      }
    }
  });
  drag(ref);

  return (
    <div
      ref={ref}
      key={id}
      id={id}
      class="embeddingElem"
      style={{ opacity: isDisabled ? 0 : 1 }}
    >
      {text}
    </div>
  );
};

export default EmbeddingElem;
