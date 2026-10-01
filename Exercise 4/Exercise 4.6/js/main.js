const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 500 1200")
    .style("border", "1px solid white");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.Brand_Reg,
    count: +d["Count(SoldIn)"]
  };
}).then(data => {
  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
});

const drawBarChart = data => {
  console.log("scaled version running");

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count) * 1.1])
    .range([0, 400]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 1200])
    .padding(0.2);

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 0)
      .attr("y", d => yScale(d.brand))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "steelblue");
};