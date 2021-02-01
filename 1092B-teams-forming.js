const stdin = process.stdin
stdin.setEncoding('utf8')
stdin.on('data', function (data) {
  const input = data.split('\n')
  const n = input[0].split(' ').map(function (a) {
    return parseInt(a)
  })
  const k = input[1].split(' ').map(function (a) {
    return parseInt(a)
  })
  const result = solution(n, k)
  console.log(result)
})

function solution(n, studentsArray) {
  let res = 0
  studentsArray.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < n - 1; i = i + 2) {
    res = res + (studentsArray[i + 1] - studentsArray[i])
  }
  return res
}
