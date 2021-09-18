const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
});
rl.on("close", () => {
  const [n, h] = input.pop().split(' ').map(e => +e)
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0n))
  for(let i=0;i<=n;++i) dp[0][i]=1n;
  for(let i=1;i<=n;++i) {
    for(let j=1;j<=n;++j) {
      for(let k=0;k<i;++k) {
        dp[i][j]+=dp[k][j-1]*dp[i-k-1][j-1];
      }
    }
  }

  const res = dp[n][n]-dp[n][h-1]
  console.log('' + res)
});
