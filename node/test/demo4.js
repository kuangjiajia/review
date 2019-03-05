// process.execArgv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });
// 输出：
// 0: --harmony

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });
// 输出：
// 0: /Users/a/.nvm/versions/node/v6.1.0/bin/node
// 1: /Users/a/Documents/git-code/nodejs-learning-guide/examples/2016.11.22-node-process/execArgv.js
// 2: --nick
// 3: chyingp

console.log(process.cwd())