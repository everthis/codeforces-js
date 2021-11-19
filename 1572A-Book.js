const readline = require("readline");
const os = require("os");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lineNum = 0, consumed = 0, lineNo = 0
let input = []
let res = []
let out = []


rl.on("line", (line) => {
  input.push(line)
  if (input.length === 2) {
    lineNum = +input[1]
  }
  
  if(input.length > 2) {
    consumed++
    input.pop()

    const tmp = line.split(' ').map(e => +e)
    lineNo++
    if(tmp.length > 1) {
      for(let j = 1; j < tmp.length; j++) {
        res.push([tmp[j], lineNo])
      }
    }

    if(consumed === lineNum) {
      const ans = solution(res, lineNum)
      out.push(ans === -1 ? -1 : ans)
      input.length = 1
      consumed = 0
      lineNo = 0
      res = []
    }
  }

});
rl.on("close", () => {
  let str = ''
  for(const e of out) str += e + os.EOL
  console.log(str)
});

function solution(arr, n) {
  const graph = {}, inDegree = Array(n + 1).fill(0)
  for(const [u, v] of arr) {
    if(graph[u] == null) graph[u] = []
    graph[u].push(v)
    inDegree[v]++
  }
  const q = [], visited = new Set(), times = Array(n + 1).fill(0)
  for(let i = 1; i <= n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      visited.add(i)
    }
    times[i] = 1
  }

  while(q.length) {
    const cur = q.pop()
    for(const next of (graph[cur] || [])) {
      inDegree[next]--
      if(cur < next) times[next] = Math.max(times[cur], times[next])
      else times[next] = Math.max(times[next], times[cur] + 1)
      if(inDegree[next] === 0) {
        q.push(next)
        visited.add(next)
      }
    }
  }

  if (visited.size === n) {
    return Math.max(...times)
  } else return -1
}
