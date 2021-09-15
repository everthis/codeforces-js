function solution(s, t) {
  const m = s.length, n = t.length
  if (m < n) return false
  let i = m - 1, j = n - 1
  const delFirstOfS = (m - n) & 1
  const smallestIdxOfS = delFirstOfS ? 1 : 0
  while(i >= smallestIdxOfS && j >= 0) {
    if(s[i] === t[j]) {
      i--
      j--
    } else {
      i -= 2
    }
    if (j < 0) return true
  }
  return false
}
 
 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const resArr = []
 
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 3) {
    const t = input.pop()
    const s = input.pop()
    const res = solution(s, t)
    resArr.push(res ? 'YES' : 'NO')
  }
});
rl.on("close", () => {
  resArr.forEach(e => console.log(e))
});
