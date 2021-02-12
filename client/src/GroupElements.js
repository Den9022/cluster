import React from "react";
import GroupElem from "./GroupElem";

function GroupElements({ groups, setsortedGroups }) {

  const renderGroupElem = (input) => {
    setsortedGroups(input.id, []);
    return <GroupElem id={input.id} setsortedGroups={setsortedGroups} />;
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
