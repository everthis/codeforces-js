const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const res = []
let pr, cur = 0, m, n
const pers = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    [n, m] = input[0].split(' ').map(e => +e)
    let s = input[1]
    pr = Array.from({ length: 6 }, () => Array(n + 1).fill(0))
    do {
      for (let i = 0; i < n; ++i) {
        pr[cur][i + 1] = pr[cur][i] + (s[i] !== pers[cur][i % 3]);
      }
      ++cur;
    } while(cur < 6)
  }
  if (input.length > 2) {
    const [l, r] = input.pop().split(' ').map(e => +e)
    let ans = n;
    for (let i = 0; i < 6; ++i) ans = Math.min(ans, pr[i][r] - pr[i][l - 1]);
    res.push(ans)
  }

});
rl.on("close", () => {
  res.forEach(e => console.log(e))
});
