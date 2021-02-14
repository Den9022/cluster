import React, { useState, useEffect } from "react";
import SortedGroupElem from "./SortedGroupElem";
import axios from "axios";

function SortedGroupElements() {
  var groupElements = [];
  const [items, setItems] = useState({});

  useEffect(() => {
    let mounted = true;
    getDataFromApi().then((data) => {
      if (mounted) {
        setItems(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const renderGroupElem = (input, id) => {
    return <SortedGroupElem key={id} input={input} id={id} />;
  };

  async function getDataFromApi() {
    const response = await axios.get("http://localhost:9000/groups");
    return response.data;
  }

  if (items) {
    for (var item in items) {
      if (items.hasOwnProperty(item)) {
        let elem = {
          id: item,
          items: items[item],
        };
        groupElements.push(elem);
      }
    }
    return (
      <>
        <div className="groupElements">
          {groupElements.map((input) => renderGroupElem(input.items, input.id))}
        </div>
      </>
    );
  } else {
    return <div className="groupElements"></div>;
  }
}

export default SortedGroupElements;
