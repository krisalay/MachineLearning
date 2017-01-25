var plotly = require('plotly')('krisalay', 'uH6qKm6jCUVTlXoN5Z8v');
module.exports = {
	scatter_plot: function(coor_x,coor_y){
		var trace1 = {
		  x: coor_x,
		  y: coor_y,
		  mode: 'markers',
		  type: "scatter"
		};
		var data = [trace1];
		var graphOptions = {filename: "bar-line", fileopt: "overwrite"};
		plotly.plot(data, graphOptions, function (err, msg) {
		    console.log(msg);
		});
	}
};