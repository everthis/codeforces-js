const stdin = process.stdin
stdin.setEncoding('utf8')
let input = ''
stdin.on('data', function (data) {
  input += data
})
stdin.on('end', function () {
  const arr = input.split('\n')
  for (let i = 2; i < arr.length; i += 2) {
    console.log(solution(arr[i]))
  }
})

function solution(str) {
  let two = 0,
    idx = 0
  for (const ch of str) {
    if (ch === ' ' || ch === '1') continue
    else if (ch === '2') {
      two++
    }
  }

  if (two % 2 === 1) return -1
  if (two === 0) return 1
  const target = two / 2

  let cnt = 0
  for (const ch of str) {
    if (ch === ' ') continue
    else if (ch === '1') idx++
    else if (ch === '2') {
      idx++
      cnt++
      if (cnt === target) {
        return idx
      }
    }
  }
}
