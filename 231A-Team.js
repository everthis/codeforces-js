const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let lineNum = 0, res = 0
rl.on('line', line => {
  if (lineNum++ === 0) return
  const e = line.split(' ')
  let el = false, num = 0
  for (let ch of e) {
    if(ch === '1') num++
  }
  if (num > 1) el = true
  
  if(el) res++
})
rl.on('close', () => {
  console.log(res)
})
