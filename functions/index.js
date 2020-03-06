exports.handler = async event => {
  const subject = event.queryStringParameters.name || "World";
  console.log("Dee is 36");
  return {
    statusCode: 200,
    body: `Hello ${subject}!`
  };
};
