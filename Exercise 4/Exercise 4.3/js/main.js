d3.select("p")
  .style("color", "red");

d3.select(".test-box")
  .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

d3.select(".test-svg")
  .append("rect")
    .attr("x", 50)
    .attr("y", 20)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");