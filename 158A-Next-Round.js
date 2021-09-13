const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', line => {
  input.push(line.split(' ').map(e => parseInt(e)))
})
rl.on('close', () => {
  const [n, k] = input[0]
  const list = input[1]
  let idx = k - 1, val = list[k - 1], res = 0
  for(let i = 0; i < n; i++) {
    if(list[i] <= 0) break;
    if(list[i] >= val) res++
  }
  console.log(res)
})
