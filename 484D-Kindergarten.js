const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
 
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    const n = +input[0], nums = input[1].split(' ').map(e => +e)
    console.log(solution(n, nums))
    input = []
  }
});
rl.on("close", () => {
});
 
function solution(n, a) {
  const dp = Array(n + 1).fill(0), { max, abs } = Math
  a.unshift(0)
  let pre = 1
  for(let i = 2;i <= n;i++){
    dp[i] = max(dp[pre-1] + abs(a[i] - a[pre]), dp[pre] + abs(a[i] - a[pre+1]));
    if(a[i-1] <= a[i] && a[i] >= a[i+1]) pre = i;
    if(a[i-1] >= a[i] && a[i] <= a[i+1]) pre = i;
  }
  return dp[n]
}
