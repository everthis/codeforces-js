const readline = require("readline");
const os = require("os");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lineNo = 0;
let res = ''

rl.on("line", (line) => {
  lineNo++;
  if (lineNo > 1) {
    res += solution(line) + os.EOL
  }
});
rl.on("close", () => {
  console.log(res)
});

function solution(str) {
    let n = str.length;
    let now = n;
    const edge = Array(n*2+1).fill(0);
    for(let c of str){
        if(c == '0') edge[--now]++;
        else edge[now++]++;
    }
    now = n;
    let ans = '';
    for(let i = 0; i < n; i++) {
        if(edge[now] == 0){
            ans += '0';
            edge[--now]--;
        }else if(edge[now-1] <= 1){
            ans += '1';
            edge[now++]--;
        }else{
            ans += '0';
            edge[--now]--;
        }
    }
    return ans
}
