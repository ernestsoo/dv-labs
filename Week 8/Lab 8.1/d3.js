function init() {



	    var dataset_array = [];


	      for (var i=0; i<8; i++)
	      {
	        dataset_array.push(Math.floor((Math.random() * 20) + 5));
	      }

	      var w = 300;
	      var h = 300;

	      var outerRadius = w / 2;
	      var innerRadius = 0;

	      var arc = d3.arc()
	                  .outerRadius(outerRadius)
	                  .innerRadius(innerRadius)

	      var pie = d3.pie();


	      var color = d3.scaleOrdinal(d3.schemeCategory10);

	      var svg = d3.select("#chart")
	                    .append("svg")
	                    .attr("width",w)
	                    .attr("height",h)


	      var arcs = svg.selectAll("g.arc")
	                      .data(pie(dataset_array))
	                      .enter()
	                      .append("g")
	                      .attr("class","arc")
	                      .attr("transform", "translate(" + outerRadius +  ", 150 )");

	                      arcs.append("path")
	                            .attr("fill", function(d,i) {
	                                return color(i);
	                            })
	                            .attr("d", function(d,i) {
	                                return arc(d,i);
	                            });
	          arcs.append("text")
	              .attr("transform", function(d){
	                  return "translate(" + arc.centroid(d) + ")";
	              })
	              .text(function(d){
	                  return d.value;
	              })
	            ;







}

window.onload = init;
