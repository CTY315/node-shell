const pwdfunc = require("./pwd");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let array = cmd.split(" ");
  if (cmd === "pwd") {
    pwdfunc();
    nextLine;
  } else if (cmd === "ls") {
    require("./ls");
  } else if (array[0] === "cat") {
    const cat = require("./cat");
    cat(array[1]);
    nextLine;
  } else if (array[0] === "curl") {
    const curl = require("./curl");
    curl(array[1]);
    nextLine;
  } else {
    process.stdout.write("You typed: " + cmd);
    nextLine;
  }
});
