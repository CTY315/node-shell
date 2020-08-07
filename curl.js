const request = require("request");
function curl(link) {
  request(link, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body);
  });
  process.stdout.write("\nprompt > ");
}

module.exports = curl;
