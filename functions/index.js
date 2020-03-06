const fs = require("fs");

console.log("Testing");

exports.handler = function(event, context, callback) {
  console.log(event.path);
  return {
    body: "Testing"
  };
};
