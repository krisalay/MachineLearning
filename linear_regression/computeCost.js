var math = require('mathjs');
module.exports = function(x,y,theta){
	var cost = 0;
	var m = y.length;
	var h = math.multiply(x,theta);
	mat_h_minus_mat_y = math.square(math.subtract(h,y));
	cost = (1/(2*m))*math.sum(mat_h_minus_mat_y);
	return cost;
};