const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid white");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.Brand_Reg,
    count: +d["Count(SoldIn)"]     // brackets needed because of the ( )
  };
}).then(data => {
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count));

  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
});

const drawBarChart = data => {
  const barHeight = 16;
  const barSpacing = 4;

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 0)
      .attr("y", (d, i) => i * (barHeight + barSpacing))
      .attr("width", d => d.count)
      .attr("height", barHeight)
      .attr("fill", "steelblue");
};