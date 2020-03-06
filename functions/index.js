const fs = require("fs");

console.log("Testing");

exports.handler = function(event, context, callback) {
  let file;
  if (event.path.includes("Categories")) {
    file = fs.readFileSync("./categories.json");
  }

  // if (event.path.includes("Games")) {
  //   file = fs.readFileSync("./games");
  // }

  // if (event.path.includes("Launch")) {
  //   file = fs.readFileSync("./launch");
  // }
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
