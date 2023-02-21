process.stdin.resume();
process.stdin.setEncoding('utf8');
 
// your code goes here
 
 
// declare global variables
let input_stdin = "";
let lines = "";
let input_currentline = 0;
 
// standard input is stored into input_stdin
process.stdin.on('data', function (data) {
    input_stdin += data;
});
 
// standard input is done and stored into an array
process.stdin.on('end', function () {
    lines = input_stdin.split("\n");
    start();
});
 
 
function start() {
    let t = parseInt(lines[0])
    let line = 1
    while (t--) {
        const n = parseInt(lines[line++])
        const a = lines[line++].split(' ').map(x => parseInt(x))
        let total = 0
        for(let i = 0; i < n; i++) if (a[i] == 2) total++
        if (total % 2) console.log(-1)
        else {
            if (total == 0) {
                console.log(1)
            } else {
                let i = 0
                let count = 0
                for(i = 0; i < n - 1; i++) {
                    if (a[i] == 2)
                        count++
                    if(count == (total / 2))
                        break
                }
                console.log(i + 1)
            }
            
        }
    }
}
