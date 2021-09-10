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

// another

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const arr = []
rl.on('line', line => {
  arr.push(line)
})
rl.on('close', () => {
 const res = solution(arr.slice(1))
 res.forEach(e => console.log(e))
})


function solution (arr) {
  const res = []
  for(let str of arr) {
    if(str.length <= 10) res.push(str)
    else {
      const tmp = str[0] + (str.length - 2) + str[str.length - 1]
      res.push(tmp)
    }
  }
  return res
}
