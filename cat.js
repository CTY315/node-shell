const fs = require("fs");

module.exports = function (fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      process.stdout.write("\nprompt > ");
    } else {
      console.log(data);
      process.stdout.write("\nprompt > ");
    }
  });
};

// First, modify your bash.js so that it captures not only the name
//of the command, but also the argument to that command. Then,
// implement cat.js as a module that exports a function that accepts the
// argument to the cat command, and prints out the contents of that file
// Finally, pull your cat function into bash.js and hook up the logic!
