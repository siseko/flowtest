const axios = require("axios");

console.log("Testing");

exports.handler = function(event, context, callback) {
  // console.log("-->", JSON.stringify(event), JSON.stringify(context));
  axios
    .get("https://randomuser.me/api/")
    .then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept"
        }
      });
    })
    .catch(ex => callback(ex));
};
