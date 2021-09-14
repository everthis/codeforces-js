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
  const str = input[1]
  let pre = ''

  const cnt = {}
  let max = -Infinity

  for(let i= 0, n = str.length; i < n; i++) {
    if (str[i] === ' ') {
      if (pre) {
        cnt[pre] = (cnt[pre] || 0) + 1
        if (+pre > max) max = +pre
        pre = ''
      }
    } else {
      pre += str[i]
    }
  }

  if (pre) {
    cnt[pre] = (cnt[pre] || 0) + 1
    if (+pre > max) max = +pre
    pre = ''
  }

  const v = []
  for(let k in cnt) {
    if (cnt.hasOwnProperty(k)) {
      v.push([+k, cnt[k]])
    }
  }
  v.sort((a, b) => a[0] - b[0])
  const f = Array(111111).fill(0)
  for (let i = 0; i < v.length; i++) {
    let pr = i - 1;
    while (pr >= 0 && v[pr][0] + 1 == v[i][0]) pr--;
    if (pr == -1) f[i] = 1 * v[i][0] * v[i][1];
    else f[i] = f[pr] + 1 * v[i][0] * v[i][1];
    if (i != 0) f[i] = Math.max(f[i], f[i - 1]);
  }
  const res = f[v.length - 1]

  console.log(res)
});
