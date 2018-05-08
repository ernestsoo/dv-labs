function init() {	  
	  
	  
	  var w = 500;
      var h = 150;

      // Initalize Padding between bars
      var barPadding = 2;

      var scaleFactor = 4;

      // Initialize Dataset
        var dataset;

        var rowConverter = function (d) {
            return {

                Test: parseFloat(d.Test)

            };



        }

        d3.csv("DataVis_T2.4.csv", rowConverter, function (data) {
            dataset = data;

            console.log(dataset);
            
            barChart(dataset);

        });
        
              var svg = d3.select("#chart")
                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);


        function barChart()
        {
        	
        	if(dataset)
        	{

                svg.selectAll("rect")
                    .data(dataset)
                    .enter()
                    .append("rect")
                    .attr("x", function(d,i){
                        return i * (w / dataset.length);
                    })
                    .attr("y", function(d){
                        return h - (d.Test * scaleFactor);
                    })
                    .attr("width", w / dataset.length - barPadding)
                    .attr("height", function(d){
                        return d.Test * scaleFactor;
                    });
                
            }else
            {
                alert("Dataset failed to load.");
            }
        
        };
        
        
}

window.onload = init;