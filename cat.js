const fs = require("fs");

function cat(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
module.exports = cat;

// First, modify your bash.js so that it captures not only the name
//of the command, but also the argument to that command. Then,
// implement cat.js as a module that exports a function that accepts the
// argument to the cat command, and prints out the contents of that file
// Finally, pull your cat function into bash.js and hook up the logic!
