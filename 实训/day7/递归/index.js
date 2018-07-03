//n!=n*(n-1)!
//9! = 9*8*7*....1

//n!=n*(n-1)*(n-2)*....*1
//999*998*997*...*1

//阶乘
function factorial(n) {
	//9*8*7....*2
	if(n > 1) {
		result = n * factorial(n - 1);
		return result;
	}
	//停止运算
	if(n == 1) {
		return 1
	}
}
var num = 9
console.log(factorial(num))
console.log(factorial(3))
console.log(factorial(4))

/*factorial(3)->9*factorial(8)->8*factorial(7)......2*factorial(1)


3*factorial(2)
2*factorial(1)

3*2*factorial(1)

3 * 2*factorial(1)
3 * 2 * 1*/
