const axios = require("axios");

const basePath = "https://vigilant-wing-f244c1.netlify.com/files";
exports.handler = async function(event, context, callback) {
  let file;

  console.log(event.path);
  if (event.path.includes("Categories")) {
    console.log("categories");
    file = await axios.get(`${basePath}/categories.json`);
  }

  // if (event.path.includes("Games")) {
  //   file = fs.readFileSync("./games");
  // }

  // if (event.path.includes("Launch")) {
  //   file = fs.readFileSync("./launch");
  // }
  console.log("-->", file);
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
