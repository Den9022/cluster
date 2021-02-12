var output = require("test_groups.json");

module.export = {
  grouping(input) {
    console.log("input: " , input)

    console.log("output: " , output)
    return output
  } 
};
