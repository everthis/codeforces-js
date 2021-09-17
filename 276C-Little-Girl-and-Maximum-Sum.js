const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
 
let a;
let val = [];
let b  =  [];
let n
let q
 
rl.on("line", (line) => {
  input.push(line);
  if (input.length == 2) {
    const arr = input[0].split(' ').map(e => +e)
    n = arr[0]
    q = arr[1]
    a = input[1].split(' ').map(e => +e)
    a.sort((a, b) => a - b)
    val = Array(n).fill(0)
    b = Array(n).fill(0)
  }
  if (input.length === 3) {
    let [l, r] = input.pop().split(' ').map(e => +e)
		l--;
		r--;
		val[l]++;
		if (r<n-1) val[r+1]--;
  }
 
});
rl.on("close", () => {
  let v = 0
  for(let i = 0; i < n; i++) {
		v+=val[i];
		b[i]=v;
	}
  b.sort((a, b) => a - b)
 
  let res = 0
  for(let i = 0; i < n; i++) {
		res += (b[i] * a[i]);
  }
 
  console.log(res)
});
