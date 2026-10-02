d3.csv("data/Data_exercise 5.1.csv", d => {
  return {
    screen: d.screen,
    energy: +d.energy          // + turns text into a number
  };
}).then(data => {
  console.log(data);
  data.sort((a, b) => b.energy - a.energy);   // highest first
  drawBarChart(data);
});

const drawBarChart = data => {

  // --- sizes and margins ---
  const width = 800;
  const height = 500;
  const margin = { top: 40, right: 30, bottom: 50, left: 70 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // --- outer svg (the whole canvas) ---
  const svg = d3.select("#bar_chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("border", "1px solid white");

  // --- inner chart (shifted in by the margins) ---
  const innerChart = svg
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // --- scales ---
  const xScale = d3.scaleBand()                  // categories along the bottom
    .domain(data.map(d => d.screen))
    .range([0, innerWidth])
    .padding(0.2);

  const yScale = d3.scaleLinear()                // numbers up the side
    .domain([0, d3.max(data, d => d.energy)])
    .nice()                                      // rounds the top to a tidy number
    .range([innerHeight, 0]);                    // flipped: 0 is at the top of an svg

  // --- axes ---
  const bottomAxis = d3.axisBottom(xScale).tickSize(0);   // no tick marks
  const leftAxis = d3.axisLeft(yScale);

  innerChart
    .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)  // move to the bottom
      .call(bottomAxis);

  innerChart
    .append("g")
      .call(leftAxis);

  // --- y axis label ---
  svg
    .append("text")
      .attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -(margin.top + innerHeight / 2))
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .text("Average energy consumption (kWh/year)");

  // --- bars ---
  innerChart
    .selectAll(".bar")
    .data(data)
    .join("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.screen))
      .attr("y", d => yScale(d.energy))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d.energy))   // y is upside down
      .attr("fill", "steelblue");

  // --- value labels above the bars ---
  innerChart
    .selectAll(".bar-label")
    .data(data)
    .join("text")
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.screen) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.energy) - 8)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("font-size", "14px")
      .text(d => Math.round(d.energy));
};