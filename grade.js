var grade = d3.json("gradedatatime.json");
grade.then(function(data)
{
	console.log("data",data);
	drawChart(data,"svg");
},
function(err)
{
	console.log(err);
});
var width = 500;
var chartW = 300
var height = 250;
var barpadding = 5;
var barwidth = (chartW/7) - barpadding;
var legendW = 15;
var legendH = 15;
var legendpadding = 5;
var drawChart = function(data){
var svg = d3.select("body")
		.selectAll("svg")
		.attr("width",width)
		.attr("height",height);
var svg = d3.select("body")
				.selectAll("svg")
				.attr("width",width)
				.attr("height",height);
				
				svg.selectAll("rect")
					.data(data)
					.enter()
					.append("rect")
					.attr("x",function(d,i){
					  return i*(barwidth+barpadding)
					})
					.attr("y",function(d){
					  return height- d.num*20
					})
					.attr("width",barwidth)
					.attr("height",function(d){
					  return d.num*20
					})
					.attr("fill",function(d){
					  return d.color
					})

				// labels
				svg.selectAll("text")
					.data(data)
					.enter()
					.append("text")
					.text(function(d){
					  return d.num;
					})
					.attr("x",function(d,i){
					  return i*(barwidth+barpadding)+barwidth/2
					})
					.attr("y",function(d){
					  return height- d.num*20-5
					})
					.attr("text-anchor","middle")
					.style("font-size",15)
});
