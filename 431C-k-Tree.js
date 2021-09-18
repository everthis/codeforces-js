const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const mod = 1e9 + 7
const dp = Array.from({ length: 101 }, () => [0, 0])
const add = (dp, i1, i2, j1, j2) => {
  dp[i1][j1] += dp[i2][j2]
  if (dp[i1][j1] >= mod) dp[i1][j1] -= mod
}
rl.on("line", (line) => {
  input.push(line);
});
rl.on("close", () => {
  const [n, k, d] = input.pop().split(' ').map(e => +e)
  dp[0][0] = 1
  dp[0][1] = 0
  for(let i = 1 ; i <= n ; ++i) {
    dp[i][0] = dp[i][1] = 0;
    for(let j = 1 ; j <= k ; ++j) {
      if(i - j < 0) break;
      if(j < d) {
        add(dp, i, i - j, 0, 0);
        add(dp, i, i - j, 1, 1);
      } else {
        add(dp, i, i - j, 1, 0);
        add(dp, i, i - j, 1, 1);
      }
    }
  }
 
  console.log(dp[n][1])
});
