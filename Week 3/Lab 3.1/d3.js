function init() {	  
	  

    var w = 750;
    var h = 250;
    var padding = 65;

    // Initalize Padding between bars
    var barPadding = 2;

    var scaleFactor = 4;

    // Initialize Dataset
    var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

    var scaleX = d3.scaleLinear()
        .domain([d3.min(dataset, function (d) {
            return d[0];
        }),
        d3.max(dataset, function (d) {
            return d[0];
        })])
        .range([padding, w - padding]);


    var scaleY = d3.scaleLinear()
        .domain([d3.min(dataset, function (d) {
            return d[1];
        }),
        d3.max(dataset, function (d) {
            return d[1];
        })])
        .range([padding, h - padding]);

    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d, i) {
            return scaleX(d[0]);
        })
        .attr("cy", function (d) {
            return scaleY(d[1]);
        })
        .attr("r", 5)
        .attr("fill", function (d) {
            if (d[0] == 480 && d[1] == 90) {
                return "red";
            } else {
                return "slategrey";
            }
        });


    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d[0] + ", " + d[1];
        })
        .attr("x", function (d, i) {
            return scaleX(d[0]) + 2;
        })
        .attr("y", function (d) {
            return scaleY(d[1]) - 3;
        })
        .attr("fill", "green");


        
}

window.onload = init;