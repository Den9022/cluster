import React from "react";
import GroupElem from "./GroupElem";
//import axios from "axios";

function GroupElements({groups, setsortedGroups}) {
  /*const getGroups = () => {
    axios.get(`http://localhost:9000/groups`).then((res) => {
      setGroups(res.data);
    });
  };*/

  const renderGroupElem = (input) => {
    return <GroupElem id={input.id} setsortedGroups={setsortedGroups} />;
  };

  if (groups) {
    let groupElements = [];

    for (let index = 0; index < parseInt(groups); index++) {
      let elem = {
        id: "group" + index + 1,
      };
      groupElements.push(elem);
    }

    return (
      <>
        <div class="groupElements">
          {groupElements.map((input) => renderGroupElem(input))}
        </div>
      </>
    );
  } else {
    return <div class="groupElements"></div>;
  }
}

export default GroupElements;
