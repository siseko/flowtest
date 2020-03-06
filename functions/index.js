const fs = require("fs");

console.log("Testing");

exports.handler = function(event, context, callback) {
  console.log(event.path);
  const res = fs.readFileSync("categories.json");
  console.log(res, res.toString());
  return {
    body: "Testing",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  };
};
