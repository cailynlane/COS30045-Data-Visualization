d3.csv("data/spot-prices.csv", d => {
  return {
    year: +d.year,                  
    averagePrice: +d.averagePrice
  };
}).then(data => {
  console.log(data);
  drawLineChart(data);
});

const drawLineChart = data => {

  const width = 800;
  const height = 500;
  const margin = { top: 40, right: 30, bottom: 50, left: 70 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select("#line_chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("border", "1px solid white");

  const innerChart = svg
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))             
    .range([0, innerWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.averagePrice)])
    .nice()
    .range([innerHeight, 0]);

 
  const bottomAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
  const leftAxis = d3.axisLeft(yScale);

  innerChart
    .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(bottomAxis);

  innerChart
    .append("g")
      .call(leftAxis);

  svg
    .append("text")
      .attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -(margin.top + innerHeight / 2))
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .text("Average spot price ($/MWh)");

  svg
    .append("text")
      .attr("class", "axis-label")
      .attr("x", margin.left + innerWidth / 2)
      .attr("y", height - 8)
      .attr("text-anchor", "middle")
      .text("Year");

 
  const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.averagePrice));

  innerChart
    .append("path")
      .datum(data)                                 
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", "#fff36b")
      .attr("stroke-width", 3);

  innerChart
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.averagePrice))
      .attr("r", 4)
      .attr("fill", "#ff4fb3");
};