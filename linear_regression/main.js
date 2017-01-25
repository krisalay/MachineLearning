var plot = require('./ploty_plot');
var cost = require('./computeCost');
var gradientDescent = require('./gradientDescent');
var math = require('mathjs');

console.log('Plotting data...');
var coor_json = require('./data1.json')["data"];
var x_coor = [];
var y_coor = [];
for(var i =0; i<coor_json.length; i++){
	x_coor.push(coor_json[i][0]);
	y_coor.push(coor_json[i][1]);
}
var m = y_coor.length;
var x = [];
var y = [];
plot.scatter_plot(x_coor,y_coor);
for(var j=0; j<m;j++){
	var obj1 = [];
	var obj2 = [];
	obj1.push(x_coor[j]);
	obj2.push(y_coor[j]);
	x.push(obj1);
	y.push(obj2);
}
console.log('Running gradient descent...');
x = math.concat(x,math.ones(m,1)._data);
var theta = math.zeros(2,1)._data;
var iterations = 1500;
var alpha = 0.01;
var initial_cost = cost(x,y,theta);
console.log('initial cost: '+initial_cost)
theta = gradientDescent(x,y,theta,alpha,iterations);
console.log('theta: '+theta);
console.log('Prediction for x=10')
console.log(math.multiply([1, -10],theta));