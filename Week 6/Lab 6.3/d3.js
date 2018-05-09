function init() {	  
	  
	  
	  var w = 600;
      var h = 300;

      // Initalize Padding between bars
      var padding = 55;

      var scaleFactor = 4;

      // Initialize Dataset
        var dataset;

        var rowConverter = function (d) {
            return {
                date: new Date(+d.year, (+d.month-1)),
                number: parseFloat(d.number)
            };

        }

        d3.csv("Unemployment_78-95.csv", rowConverter, function (data) {
            dataset = data;

            //console.table(dataset,["date","number"]);
            
            lineChart(dataset);

        });
        
 
        

                                 
        function lineChart()
        {
        	
        	if(dataset)
        	{
                var xScale = d3.scaleTime()
                    .domain([
                        d3.min(dataset, function(d){ return d.date; }),
                        d3.max(dataset, function(d){ return d.date; })
                    ])
                    .range([padding,w-padding]);
    
                var yScale = d3.scaleLinear()
                                .domain([0, d3.max(dataset, function(d){ return d.number; })])
                                .range([h-padding,padding]);

                var line = d3.line()
                                .x(function(d) {return xScale(d.date) })
                                .y(function(d) {return yScale(d.number) });
                
                var area = d3.area()
                                .x(function(d) {return xScale(d.date) })
                                //base line for area shape
                                .y0(function() {return yScale.range()[0]; })
                                .y1(function(d) {return yScale(d.number)});

                var svg = d3.select("#chart")
                              .append("svg")
                              .attr("width",w)
                              .attr("height",h);


                svg.append("path")
                        .datum(dataset)
                        .attr("class","area")
                        .attr("d" , area);
                
                    
                // Axis
                var xAxis = d3.axisBottom()
                    .ticks(10)
                    .scale(xScale);

                var yAxis = d3.axisLeft()
                    .ticks(10)
                    .scale(yScale);

                svg.append("g")
                    .attr("transform","translate(0, "+(h - padding) + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("transform", "translate(+" +  (padding ) + ",0 )")
                    .call(yAxis);
                
                svg.append("line")
                    .attr("class","line halfMilMark")
                    //start of line
                    .attr("x1", padding)
                    .attr("y1", yScale(500000))
                    //end of line
                    .attr("x2", w)
                    .attr("y2", yScale(500000));
                
                svg.append("text")
                    .attr("class","halfMilLabel")
                    .attr("x", padding + 10)
                    .attr("y", yScale(500000) - 7)
                    .text("Half a million unemployed");
            }else
            {
                alert("Dataset failed to load.");
            }
        
        };
        
        
}

window.onload = init;