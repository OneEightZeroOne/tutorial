//1+2+3+4......100
//(1+100)*100/2

function sum(n){
	if(n>1){
		result = n+sum(n-1);
		return result;
	};
	if(n==1){
		return 1;
	}
}

console.log(sum());
