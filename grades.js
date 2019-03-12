
var datajson = d3.json("gradedatatime.json");

datajson.then(function(data)
{
  console.log("data",data);
  drawChart(data, "svg");
},
function(err)
{
  console.log(err);
});



var drawChart = function(data,){
  var height = 750;
  var width = 1500;
  var svg;
  var barWidth = (width/data.length)
    svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d,i){
              return i * barWidth + 10;
            })
            .attr("y", function(d){
              return height - d.grade;
            })
            .attr("height", function(d){
              return d.grade;
            })
            .attr("width", barWidth)
            .attr("fill", "green");
   
  svg.selectAll("text.labels")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d.name;
    })
    .attr("x", function(d, i){
      return i * barWidth + 17;
    })
    .attr("y", function(d){
      return height - d.grade + 15;
    })
    .attr("font-size", "12px")
    .attr("fill", "white");
  
    svg.selectAll("text.num")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d.grade;
    })
    .attr("x", function(d, i){
      return i * barWidth + 17;
    })
    .attr("y", function(d){
      return height - d.grade + 30;
    })
    .attr("font-size", "12px")
    .attr("fill", "white");


 

}
