const fs = require("fs");

console.log("Testing");

exports.handler = function(event, context, callback) {
  console.log("-->", event.path.includes("Categories"));
  const file = fs.readFileSync("./categories");
  console.log("-->", file, file.toString());
  callback(null, {
    statusCode: 200,
    body: "Testing",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  });
};
