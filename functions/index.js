const axios = require("axios");

console.log("Testing");

exports.handler = function(event, context, callback) {
  // console.log("-->", JSON.stringify(event), JSON.stringify(context));
  axios
    .get("https://randomuser.me/api/")
    .then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json)
      });
    })
    .catch(ex => callback(ex));
};
