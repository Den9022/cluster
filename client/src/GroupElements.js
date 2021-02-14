import React from "react";
import GroupElem from "./GroupElem";

function GroupElements({ groups, setsortedGroups }) {

  const renderGroupElem = (input) => {
    setsortedGroups(input.id, []);
    return <GroupElem key={input.id} id={input.id} setsortedGroups={setsortedGroups} />;
  };

  if (groups) {
    let groupElements = [];

    for (let index = 0; index < parseInt(groups); index++) {
      let elem = {
        id: "group_" + (index + 1),
      };
      groupElements.push(elem);
    }

    return (
      <>
        <div className="groupElements">
          {groupElements.map((input) => renderGroupElem(input))}
        </div>
      </>
    );
  } else {
    return <div className="groupElements"></div>;
  }
}

export default GroupElements;
