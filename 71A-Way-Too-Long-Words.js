const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let mark = false
rl.on('line', line => {
  if (mark === false) {
    mark = true
    return
  }
  const input = line
  const output = solution(input)
  console.log(output)
})
rl.on('close', () => {
 
})
 
function solution (str) {
  return str.length > 10 ? (str[0] + (str.length - 2) + str[str.length - 1]) : str 
}
