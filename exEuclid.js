var m = 121;
var n = 1100;

var a = gcd(m,n);
console.log(a); //11

function gcd(m,n){
	var r;

	while((r = m%n) != 0){
		m = n;
		n = r
	}
	return n;
}
