﻿function init() {


	var w = 500;
	var h = 150;

	// Initalize Padding between bars
	var barPadding = 2;

	var scaleFactor = 4;

	// Initialize Datasets
	var dataset = [15, 5, 29, 23,19,21,3,10,33,45];


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
			})
			.attr("fill","blue");



		function addData()
		{
				var maxValue = 25;
				var numValues = dataset.length;



				// Generate one new data
				dataset.push(Math.floor(Math.random() * maxValue));

				// Update xScale
				xScale.domain(d3.range(dataset.length));


				// Update new domain with d3.max()
				yScale = d3.scaleLinear()
								 .domain([0,d3.max(dataset)])
								 .range([0,h]);





		}


		d3.select(".btn-add")
				.on("click", function(){


				addData();


				var bars = svg.selectAll("rect")
												.data(dataset);

				bars.enter()
						.append("rect")
						.attr("x",w)
						.attr("y", function(d){
								return h - yScale(d);
						})
						.merge(bars)
						.transition()
						.duration(500)
						.attr("x", function(d,i){
								return xScale(i);
						})
						.attr("y", function(d,i){
								return h - yScale(d);
						})
						.attr("width", xScale.bandwidth())
						.attr("height", function(d){
								return yScale(d);
							})
						.attr("fill","blue");


		});

		d3.select(".btn-remove")
				.on("click",function(){

				dataset.shift();

				var bars = svg.selectAll("rect")
										.data(dataset);

				bars.exit()
						.transition()
						.duration(500)
						.attr("x", w)
						.remove();


		})



}

window.onload = init;
