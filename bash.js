const pwdfunc = require("./pwd");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let array = cmd.split(" ");
  if (cmd === "pwd") {
    pwdfunc();
  } else if (cmd === "ls") {
    require("./ls");
  } else if (array[0] === "cat") {
    const cat = require("./cat");
    cat(array[1]);
  } else if (array[0] === "curl") {
    const curl = require("./curl");
    curl(array[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
