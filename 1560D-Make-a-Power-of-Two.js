const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const P2LIM = BigInt(2e18);

rl.on("line", (line) => {
  input.push(line);
});
rl.on("close", () => {
  const list = input.slice(1);
  const ts = [];
  for (let p2 = 1n; p2 <= P2LIM; p2 *= 2n) ts.push(String(p2));
  for (let e of list) {
    let res = e.length + 1;
    for (let p2 of ts) {
      res = Math.min(res, solve(e, p2));
    }
    console.log(res);
  }
});

function solve(s, t) {
  let tp = 0;
  let sp = 0;
  let taken = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      taken++;
      tp++;
    }
    sp++;
  }
  return s.length - taken + t.length - taken;
}
