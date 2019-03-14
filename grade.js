
var grade = d3.json("gradedatatime.json");
	var width = 500;
	var chartW = 300;
	var height = 250;
	var barwidth = (chartW/7) - 5;
	var legendW = 15;
	var legendH = 15;
	var legendpadding = 5;
	var drawChart = function(data,day){

	var svg = d3.select("svg");
		svg.selectAll("rect")
				.attr("width",width)
				.attr("height",height);
				
				svg.selectAll("rect")
					.data(data[day])
					.enter()
					.append("rect")
					.attr("x",function(d,i){
					  return i*(barwidth+5)
					})
					.attr("y",function(d){
					  return height- d.grade*20
					})
					.attr("width",barwidth)
					.attr("height",function(d){
					  return d.grade*20
					})
					.attr("fill", "green");

				// labels
				svg.selectAll("text")
					.data(data[day])
					.enter()
					.append("text")
					.text(function(d){
					  return d.name;
					})
					.attr("x",function(d,i){
					  return i*(barwidth+5)+barwidth/2
					})
					.attr("y",function(d){
					  return height- d.grade*20-5
					})
					.attr("text-anchor","middle")
					.style("font-size",15)
}
grade.then(function(data)
{
	console.log("data",data);
	drawChart(data,"svg");
},
function(err)
{
	console.log(err);
});
