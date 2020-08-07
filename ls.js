const fs = require("fs");

module.exports = fs.readdir("./", "utf8", (err, files) => {
  if (err) {
    console.log(err);
    process.stdout.write("\nprompt > ");
  } else {
    process.stdout.write(files.join("\n"));
    process.stdout.write("\nprompt > ");
  }
});
