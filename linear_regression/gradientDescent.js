var math = require('mathjs');
var cost = require('./computeCost');
var plot = require('./ploty_plot');
var plotter = require('plotter').plot;

module.exports = function(x,y,theta,alpha,num_iteration){
	var m = y.length;
	var cost_history = [];
	for(var i=0;i<num_iteration;i++){
		var mat_h_minus_mat_y = math.subtract(math.multiply(x,theta),y);
		var val = math.multiply((alpha/m),math.multiply(math.transpose(x),mat_h_minus_mat_y));
		theta = math.subtract(theta,val);
		//console.log('Iteration: '+ i +' of '+ num_iteration+ ' completed. Val: '+ val);
		cost_history.push(cost(x,y,theta));
	}
	plotter({
	    data:		cost_history,
	    filename:	'cost_history.png'
	});
	return (theta);
};