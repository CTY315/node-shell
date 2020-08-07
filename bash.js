const pwdfunc = require('./pwd');
const lsFile = require('./ls');
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwdfunc();
  } else if (cmd === 'ls') {
    lsFile;
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
