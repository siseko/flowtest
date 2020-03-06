const fs = require("fs");
const path = require("path");

console.log("Testing");

//joining path of directory
const directoryPath = path.join(__dirname, "");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function(file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

exports.handler = function(event, context, callback) {
  let file;
  if (event.path.includes("Categories")) {
    file = fs.readFileSync("./files/categories.json");
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
