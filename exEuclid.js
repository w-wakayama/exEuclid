//m*x + n*y = gcd(m,n)
var m = 14;
var n = 35;

var ans = exEuclid(m,n);
console.log(ans);

function exEuclid(m,n){
	//入れ替え
	if(m<n){
		var r = m;
		var m = n;
		var n = r;
	}

	//最大公約数を求める
	var l = gcd(m,n);

	var r0 = m,
			r1 = n,
			x0 = 1, //m = (m*1)+(n*0)
			x1 = 0,
			y0 = 0, //n = (m*0)+(n*1)
			y1 = 1;

	while(r1>0){
		q1 = r0 / r1;　//r0/r1 = q1...r2
		r2 = r0 % r1;

	  x2 = x0 - q1*x1;
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


function gcd(m,n){
	var r;

	while((r = m%n) != 0){
		m = n;
		n = r
	}
	return n;
}
