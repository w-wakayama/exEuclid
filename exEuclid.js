var m = 14;
var n = 35;

var ans = exEuclid(m,n);
console.log(ans);

function exEuclid(m,n){
	if(m<n){
		var r = m;
		var m = n;
		var n = r;
	}

	var l = gcd(m,n);

	var r0 = m,
			r1 = n,
			x0 = 1,
			x1 = 0,
			y0 = 0,
			y1 = 1;
	while(r1>0){
		q1 = r0 / r1;　//r0 / r1 = q1...r2
		r2 = r0 % r1;

	  x2 = x0 - q1*x1; //r2 = r0 - r1*q1
	  y2 = y0 - q1*y1;

	  r0 = r1;
		r1 = r2;
	  x0 = x1;
		x1 = x2;
	  y0 = y1;
		y1 = y2;
	}
	return {a: m, b: n, x: x0, y: y0, gcd: l}
};


//最大公約数を求める
function gcd(m,n){
	var r;

	while((r = m%n) != 0){
		m = n;
		n = r
	}
	return n;
}
