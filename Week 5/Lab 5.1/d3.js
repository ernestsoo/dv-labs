﻿function init() {


	var w = 500;
	var h = 150;

	// Initalize Padding between bars
	var barPadding = 2;

	var scaleFactor = 4;

	// Initialize Datasets
	var dataset = [15, 5, 29, 23,19,21,3,10,33,45];
	var dataset_update = [24,10,29,19,8,15,20,12,9,6,21,28];



	var xScale = d3.scaleBand()
								 .domain(d3.range(dataset.length))
								 .rangeRound([0,w])
								 .paddingInner(0.05);


	console.log("max",d3.max(dataset));
	var yScale = d3.scaleLinear()
								 .domain([0,d3.max(dataset)])
								 .range([0,h]);

	var svg = d3.select("#chart")
							.append("svg")
							.attr("width",w)
							.attr("height",h);


	svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", function(d,i){
				return xScale(i);
			})
			.attr("y", function(d,i){
				return h - yScale(d);
			})
			.attr("width", xScale.bandwidth())
			.attr("height", function(d){
				return yScale(d);
			});


		d3.select(".btn")
				.on("click", function(){

				var maxValue = 25;
				var numValues = dataset.length;

				dataset = [];

				// Generate new dataset
				for(var i = 0; i < numValues; i++)
				{
						dataset.push(Math.floor(Math.random() * maxValue));
				}

				// Update new domain with d3.max()
				yScale = d3.scaleLinear()
								 .domain([0,d3.max(dataset)])
								 .range([0,h]);

				// Update Visualization
				svg.selectAll("rect")
						.data(dataset)
						.attr("y", function(d,i){
								return h - yScale(d);
						})
						.attr("height", function(d){
								return yScale(d);
						});


		})


}

window.onload = init;
