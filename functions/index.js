const axios = require("axios");

const basePath = "https://vigilant-wing-f244c1.netlify.com/files";
exports.handler = async function(event, context, callback) {
  let file;

  if (event.path.includes("Categories")) {
    file = await axios.get(`${basePath}/categories.json`);
  }

  if (event.path.includes("Search")) {
    file = await axios.get(`${basePath}/games-search.json`);
  }

  if (event.path.includes("Games")) {
    file = await axios.get(`${basePath}/games.json`);
  }

  if (event.path.includes("Launch")) {
    file = await axios.get(`${basePath}/launch.json`);
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(file.data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  });
};
