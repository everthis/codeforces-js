const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on('data', function (data) {
    let input = data.split('\n');
    let n = input[0]
    let result = solution(+n);
    console.log(result);
});
 
function solution (n) {
	return n % 2 === 0 && n > 2 ? 'YES' : 'NO'
}
